import { Inject, Injectable } from '@nestjs/common'
import { CustomPrismaClient } from 'src/infrastructure/database/prismaSingleton'
import { UserCreateType } from '../types'
import { UserModel } from '../model/user.model'
import { UserUpdateDto } from '../../infrastructure/dto/user-update.dto'
import { PaginationBuilder } from 'src/infrastructure/database/paginationBuilder.service'
import { Prisma } from '@prisma/client'
import { ListingDto } from 'src/infrastructure/common/pagination/dto/listing.dto'

@Injectable()
export class UserRepository {
  constructor(@Inject('PRISMA') private readonly prisma: CustomPrismaClient) {}

  async create(data: UserCreateType): Promise<UserModel> {
    return this.prisma.user.create({
      data,
    })
  }

  async update(id: string, data: UserUpdateDto): Promise<void> {
    await this.prisma.user.update({
      where: { id },
      data,
    })
  }

  async findOneById(
    id: string,
    withThrow: boolean = false,
  ): Promise<UserModel> {
    const method = withThrow ? 'findFirstOrThrow' : 'findFirst'
    return this.prisma.user[method]({
      where: {
        id,
        deletedAt: null,
      },
    })
  }

  async findManyListing(listing: ListingDto) {
    return new PaginationBuilder<UserModel>()
      .setModel(this.prisma.user)
      .setParams(listing)
      .setWhere<Prisma.UserWhereInput>({ deletedAt: null })
      .build()
  }

  async findMany() {
    return this.prisma.user.findMany({
      where: {
        deletedAt: null,
      },
    })
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    })
  }
}
