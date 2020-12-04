import { Auth } from "@app/auth";
import { authenticated } from "@app/middleware/auth";
import { User } from "@app/models/User";
import { ApplyAll, BaseException, Controller, Get, NotFoundException, RequestContext, ForbiddenException, Url, View } from "sipp";
import { ProfileView } from './user.view';

@ApplyAll(authenticated)
export class UserController extends Controller {

  @Get()
  listUsers(): Promise<User[]> {
    return User.query();
  }

  @Get('/profile', { name: 'profile' })
  async profile(url: Url, auth: Auth) {
    return this.redirect(url.alias('show.user', { user: auth.user.id }))
  }

  @Get('/:user', { name: 'show.user' })
  showUser(): View {
    return new ProfileView();
  }

  onException(exception: BaseException, ctx: RequestContext) {
    switch(true) {
      case exception instanceof ForbiddenException:
      case exception instanceof NotFoundException:
        return this.redirect(ctx.url.alias('show.login'));
    }
    return false;
  }
}