import { Global, Module } from '@nestjs/common'
import { PrismaSingleton } from './prismaSingleton'

@Global()
@Module({
  imports: [],
  providers: [
    {
      provide: 'PRISMA',
      useValue: PrismaSingleton.getInstance(),
    },
  ],
  exports: ['PRISMA'],
})
export class DatabaseModule {}
