import * as _ from 'lodash'
import { ListingDto } from '../common/pagination/dto/listing.dto'

export class PaginationBuilder<T> {
  private data: {
    model?: any
    params?: ListingDto
    andWhere?: unknown
    include?: Record<string, any>
    distinctField?: keyof T
    onlyData?: boolean
  } = {}

  setModel(model: any): this {
    this.data.model = model
    return this
  }

  setParams(params: ListingDto): this {
    this.data.params = params
    return this
  }

  setWhere<T>(where: Partial<T>): this {
    this.data.andWhere = where
    return this
  }

  setUnique(field: keyof T): this {
    this.data.distinctField = field
    return this
  }

  async build() {
    const { distinctField, include, model, params, andWhere, onlyData } =
      this.data

    let where: any = {}

    if (andWhere) {
      _.merge(where, andWhere)
    }

    const { skip, take } = this.countResponseItems(params)

    const distinct = distinctField || undefined

    const records = model.findMany({
      where,
      skip,
      take,
      include: include,
      distinct,
    })

    if (onlyData) return records

    const recordsCount = model.count({
      where,
    })

    const [data, total] = await Promise.all([records, recordsCount])

    return {
      limit: params.limit,
      page: params.page,
      total: Number(total),
      data: data,
    }
  }

  private countResponseItems(params: ListingDto) {
    const res = {
      skip: undefined,
      take: undefined,
    }

    if (!params) return res

    const { limit, page } = params

    if (limit === 0 || (!limit && !page)) {
      return res
    }

    res.skip = (page - 1) * limit
    res.take = limit

    return res
  }
}
