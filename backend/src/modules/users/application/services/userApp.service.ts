import { Injectable } from '@nestjs/common'
import { UserRepository } from '../../domain/repository/user.repository'
import { UserCreateDto } from '../../infrastructure/dto/user-create.dto'
import { UserUpdateDto } from '../../infrastructure/dto/user-update.dto'
import { ListingDto } from 'src/infrastructure/common/pagination/dto/listing.dto'

@Injectable()
export class UserApplicationService {
  constructor(private readonly userRepo: UserRepository) {}

  create(dto: UserCreateDto) {
    return this.userRepo.create(dto)
  }

  update(id: string, dto: UserUpdateDto) {
    return this.userRepo.update(id, dto)
  }

  delete(id: string) {
    return this.userRepo.delete(id)
  }

  findOne(id: string) {
    return this.userRepo.findOneById(id, true)
  }

  listing(listing: ListingDto) {
    return this.userRepo.findManyListing(listing)
  }

  findMany() {
    return this.userRepo.findMany()
  }
}
