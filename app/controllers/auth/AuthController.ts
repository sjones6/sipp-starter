import { localAuth, authenticated } from "@app/middleware/auth";
import { User } from "@app/models/User";
import { Controller, Get, Post, RequestSession, RequestContext, Apply, Logger } from "sipp";
import { login, register } from './auth.view';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export class AuthController extends Controller {
  basePath = ''

  @Get('login', { name: 'show.login'})
  getLogin(ctx: RequestContext) {
    return login(ctx);
  }

  @Post('login', { name: 'login' })
  @Apply(localAuth)
  login(ctx: RequestContext) {
    return this.redirect(ctx.url('profile'));
  }

  @Get('register', { name: 'show.register' })
  getRegister(ctx: RequestContext) {
    return register(ctx);
  }

  @Post('register', { name: 'register' })
  async register(user: User, session: RequestSession, ctx: RequestContext) {
    const validation = await user.validate();
    if (validation.isValid) {
      await user.save();
      session.flash('success', 'Your account has been created! You may now login.');
      return this.redirect(ctx.url('show.login'))
    }
    session.flash('error', 'Please correct errors and retry.');
    return register(ctx, user, validation);
  }

  @Get('logout', { name: 'logout' })
  @Apply(authenticated)
  logout(logger: Logger, ctx: RequestContext) {
    ctx.req.session.destroy((err) => {
      err
        ? logger.error(`user ${ctx.req.user.id} encountered error logging out, ${err.message}`)
        : logger.info(`user ${ctx.req.user.id} logged out`);
    });
    return this.redirect(ctx.url('login'));
  }
}