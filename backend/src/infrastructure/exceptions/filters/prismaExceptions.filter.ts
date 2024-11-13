import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import { Prisma } from '@prisma/client'
import { Response } from 'express'
import { CodeExceptionsEnum } from '../enums'

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionsFilter extends BaseExceptionFilter {
  catch(
    exception: Prisma.PrismaClientKnownRequestError,
    host: ArgumentsHost,
  ): void {
    console.error(exception.message)

    const response = host.switchToHttp().getResponse<Response>()

    let status = 500
    let code = exception.code
    let message = exception.message.replace('/\n/g', '')

    // TODO Описать все коды, которые возвращает призма
    if (exception.code === 'P2025') {
      status = HttpStatus.NOT_FOUND
      code = CodeExceptionsEnum.NotFoundException
      message = `Entity Not Found`
    }

    response.status(status).json({
      status,
      code,
      message,
      meta: exception.meta,
    })
  }
}
