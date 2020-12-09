import { Auth } from '@app/auth';
import { authenticated } from '@app/middleware/auth';
import { User } from '@app/models/User';
import {
  ApplyAll,
  BaseException,
  Controller,
  Get,
  NotFoundException,
  ForbiddenException,
  Url,
} from 'sipp';
import { ProfileView } from './user.view';

@ApplyAll(authenticated)
export class UserController extends Controller {
  @Get()
  listUsers(): Promise<User[]> {
    return User.query();
  }

  @Get('/profile', { name: 'profile' })
  async profile(auth: Auth) {
    await auth.user.$loadRelated('posts');
    return new ProfileView();
  }

  @Get('/:user', { name: 'show.user' })
  showUser(url: Url) {
    return this.redirect(url.alias('profile'));
  }

  onException(exception: BaseException) {
    switch (true) {
      case exception instanceof ForbiddenException:
      case exception instanceof NotFoundException:
        return this.redirect('/login');
    }
    return false;
  }
}
