export interface Response<T = Record<string, any>> {
  limit: number
  page: number
  total: number
  data: T[]
  $aggregations: Record<string, any>
  filters?: { name: string; operators: string[] }[]
}
