import { Module } from '@nestjs/common'
import { UserRepository } from './domain/repository/user.repository'
import { UserController } from './infrastructure/controllers/user.controller'
import { UserSSEController } from './infrastructure/controllers/userSSE.controller'
import { UserApplicationService } from './application/services/userApp.service'

@Module({
  providers: [UserApplicationService, UserRepository],
  controllers: [UserController, UserSSEController],
})
export class UserModule {}
