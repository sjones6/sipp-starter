import { authenticated } from "@app/middleware/auth";
import { Post as PostModel } from "@app/models/Post";
import { ApplyAll, Post, Controller, RequestContext, RequestSession } from "sipp";

@ApplyAll(authenticated)
export class PostsController extends Controller {

  @Post('', { name: 'post.create' })
  async profile(post: PostModel, ctx: RequestContext, session: RequestSession) {
    post.user_id = ctx.req.user.id;
    await post.save();
    session.flash('success', 'Post added!');
    return ctx.back();
  }
}