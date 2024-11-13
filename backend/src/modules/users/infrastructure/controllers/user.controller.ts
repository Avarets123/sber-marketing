import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common'
import { UserCreateDto } from '../dto/user-create.dto'
import { UserUpdateDto } from '../dto/user-update.dto'
import { UserApplicationService } from '../../application/services/userApp.service'
import { ListingDto } from 'src/infrastructure/common/pagination/dto/listing.dto'

@Controller('users')
export class UserController {
  constructor(
    private readonly userApplicationService: UserApplicationService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  listing(@Query() listingDto: ListingDto) {
    return this.userApplicationService.listing(listingDto)
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.userApplicationService.findOne(id)
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() body: UserCreateDto) {
    return this.userApplicationService.create(body)
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() body: UserUpdateDto) {
    return this.userApplicationService.update(id, body)
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.userApplicationService.delete(id)
  }
}
