import { RequestContext, Resolve, View } from 'sipp';
import { App } from '@app/view/App';
import { User } from '@app/models/User';
import { Button, TextArea } from '@app/view/components';

export class ProfileView extends View {

  @Resolve()
  render(h, user: User, ctx: RequestContext) {
    return <App title={`Welcome, ${user.first_name}!`} ctx={ctx}>
      <h1>Welcome, {user.first_name}!</h1>
      <form action={ctx.url.alias('post.create')} method="post">
        {ctx.csrfField()}
        <TextArea label="Post Content" name="content" value="" />
        <Button label="submit" type="submit" />
      </form>
      <ol>
        {user?.posts?.map((post) => <li>
          {post.content}
        </li>)}
      </ol>
    </App>
  }
}