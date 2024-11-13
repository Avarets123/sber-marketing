import { IsInt, IsOptional, IsString } from 'class-validator'
import { Transform } from 'class-transformer'

export class ListingDto {
  @IsInt()
  limit? = 10

  @IsInt()
  @Transform(({ value }) => (value ? Number(value) : value))
  page? = 1
}
