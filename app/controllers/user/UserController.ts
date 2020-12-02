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
  async profile(ctx: RequestContext) {
    const { user } = ctx.req;
    user.posts = await user.$relatedQuery('posts');
    return profile(user, ctx);
  }

  @Get('/:user', { name: 'show.user' })
  async showUser(user: User, ctx: RequestContext) {
    return profile(user, ctx);
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