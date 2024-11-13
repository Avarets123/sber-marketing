import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './infrastructure/database/database.module'
import { UserModule } from './modules/users/user.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
  ],
  providers: [],
})
export class AppModule {}
