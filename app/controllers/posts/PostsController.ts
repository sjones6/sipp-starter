import { Auth } from '@app/auth';
import { authenticated } from '@app/middleware/auth';
import { Post as PostModel } from '@app/models/Post';
import { ApplyAll, Post, Controller, Session, Url } from 'sipp';

@ApplyAll(authenticated)
export class PostsController extends Controller {
  @Post('', { name: 'post.create' })
  async profile(post: PostModel, auth: Auth, session: Session, url: Url) {
    post.user_id = auth.user.id;
    await post.save();
    session.flash('success', 'Post added!');
    return url.back();
  }
}
