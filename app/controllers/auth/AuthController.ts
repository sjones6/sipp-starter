import { localAuth, hashPasswordMiddleware, authenticated } from "@app/middleware/auth";
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
    return this.redirect(ctx.url('show.user', { user: ctx.req.user.id } ));
  }

  @Get('register', { name: 'show.register' })
  getRegister(ctx: RequestContext) {
    return register(ctx);
  }

  @Post('register', { name: 'register' })
  @Apply(hashPasswordMiddleware())
  async register(user: User, session: RequestSession, ctx: RequestContext) {
    if (user.email && user.password && user.first_name && user.last_name) {
      await user.save();
      session.flash('success', 'Your account has been created! You may now login.');
      return this.redirect('/login');
    }
    session.flash('error', 'Missing required values.');
    return ctx.back();
  }

  @Get('logout', { name: 'logout' })
  @Apply(authenticated)
  logout(logger: Logger, ctx: RequestContext) {
    ctx.req.session.destroy((err) => {
      err
        ? logger.error(`user ${ctx.req.user.id} encountered error logging out, ${err.message}`)
        : logger.info(`user ${ctx.req.user.id} logged out`);
    });
    return this.redirect(ctx.url('show.login'));
  }
}