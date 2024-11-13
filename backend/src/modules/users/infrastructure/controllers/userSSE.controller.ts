import { Controller, Sse } from '@nestjs/common'
import { interval, switchMap } from 'rxjs'
import { UserApplicationService } from '../../application/services/userApp.service'

@Controller('sse/users')
export class UserSSEController {
  constructor(
    private readonly userApplicationService: UserApplicationService,
  ) {}

  @Sse()
  listing() {
    return interval(4000).pipe(
      switchMap(async () => {
        const data = await this.userApplicationService.findMany()
        return { data }
      }),
    )
  }
}
