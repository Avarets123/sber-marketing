import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common'
import { CodeExceptionsEnum } from '../enums'
import { ValidationErrorResponse } from 'src/infrastructure/validation/errors/validationError.response'

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    console.log(exception)
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    let status = exception['status'] || HttpStatus.INTERNAL_SERVER_ERROR
    let code =
      exception['code'] ||
      exception['response']?.code ||
      'INTERNAL_SERVER_ERROR'

    let message =
      exception?.['response']?.['message'] || exception['message'] || undefined

    if (exception['code'] === '23505') {
      status = HttpStatus.CONFLICT
      code = CodeExceptionsEnum.ConflictException
      message = exception['detail']
    }

    if (exception?.['response'] instanceof ValidationErrorResponse) {
      const exc = exception['response']
      code = exc.code
      status = exc.status
      message = exc.exceptions
    }

    if (typeof response?.status === 'function') {
      return response.status(status).json({ status, code, message })
    }
  }
}
