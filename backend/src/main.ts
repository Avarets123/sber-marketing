import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { exceptionBoot } from './infrastructure/exceptions/exception.boot'
import { validationBoot } from './infrastructure/validation/validation.boot'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    abortOnError: false,
  })
  app.enableCors()
  validationBoot(app)
  exceptionBoot(app)

  const PORT = process.env.API_PORT ?? 3014

  await app.listen(PORT, () => {
    console.log(`Server has been started on port: ${PORT}`)
  })
}
bootstrap()
