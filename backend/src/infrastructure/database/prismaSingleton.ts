import { Prisma, PrismaClient } from '@prisma/client'
import { OnApplicationBootstrap, OnApplicationShutdown } from '@nestjs/common'

export class CustomPrismaClient
  extends PrismaClient
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  constructor() {
    super({
      // log:,
      errorFormat: 'pretty',
    })
  }

  async onApplicationBootstrap() {
    await this.$connect()
  }

  async onApplicationShutdown() {
    await this.$disconnect()
  }
}

export class PrismaSingleton {
  private static instance: CustomPrismaClient

  static getInstance(): PrismaClient {
    if (!PrismaSingleton.instance) {
      PrismaSingleton.instance = new CustomPrismaClient()
    }

    return PrismaSingleton.instance
  }
}
