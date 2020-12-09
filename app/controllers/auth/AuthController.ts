import { Auth } from '@app/auth';
import { localAuth, authenticated } from '@app/middleware/auth';
import { User } from '@app/models/User';
import { Controller, Get, Post, Session, Apply, Logger, Url } from 'sipp';
import { LoginView, RegistrationView } from './auth.view';

export class AuthController extends Controller {
  basePath = '';

  @Get('login', { name: 'show.login' })
  getLogin() {
    return new LoginView();
  }

  @Post('login', { name: 'login' })
  @Apply(localAuth)
  login(url: Url) {
    return this.redirect(url.alias('profile'));
  }

  @Get('register', { name: 'show.register' })
  getRegister() {
    return new RegistrationView();
  }

  @Post('register', { name: 'register' })
  async register(user: User, session: Session, url: Url, logger: Logger) {
    const validation = await user.validate();
    if (validation.isValid) {
      try {
        await user.save();
        session.flash(
          'success',
          'Your account has been created! You may now login.',
        );
        return this.redirect(url.alias('show.login'));
      } catch (err) {
        logger.error(`failed to create user account, ${err}`);
        session.flash(
          'error',
          'We could not create your account. If you already have an account, please login',
        );
        return new RegistrationView(user, validation);
      }
    }
    session.flash('error', 'Please correct errors and retry.');
    return new RegistrationView(user, validation);
  }

  @Get('logout', { name: 'logout' })
  @Apply(authenticated)
  async logout(logger: Logger, url: Url, auth: Auth, session: Session) {
    await session.destroy().catch((err) => {
      err
        ? logger.error(
            `user ${auth.user.id} encountered error logging out, ${err.message}`,
          )
        : logger.info(`user ${auth.user.id} logged out`);
    });
    return this.redirect(url.alias('login'));
  }
}
