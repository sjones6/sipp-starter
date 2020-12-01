import { authenticated } from "@app/middleware/auth";
import { User } from "@app/models/User";
import { ApplyAll, BaseException, Controller, Get, NotFoundException, RequestContext, RequestSession, ForbiddenException } from "sipp";
import { profile } from './user.view';

@ApplyAll(authenticated)
export class UserController extends Controller {

  @Get()
  listUsers(): Promise<User[]> {
    return User.query();
  }

  @Get('/profile', { name: 'profile' })
  profile(ctx: RequestContext) {
    return profile(ctx.req.user, ctx);
  }

  onException(exception: BaseException, ctx: RequestContext) {
    switch(true) {
      case exception instanceof ForbiddenException:
      case exception instanceof NotFoundException:
        return this.redirect(ctx.url('show.login'));
    }
    return false;
  }
}