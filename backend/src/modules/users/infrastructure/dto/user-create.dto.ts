import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UserCreateDto {
  @IsString()
  @IsNotEmpty()
  firstName: string

  @IsString()
  @IsOptional()
  lastName: string
}
