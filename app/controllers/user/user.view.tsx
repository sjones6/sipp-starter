import { h, RequestContext, Old } from 'sipp';
import { App } from '@app/view/App';
import { User } from '@app/models/User';
import { Button, Input } from '@app/view/components';

export const profile = (user: User, ctx: RequestContext): string => <App title={`Welcome, ${user.first_name}!`} ctx={ctx}>
  <h1>Welcome, {user.first_name}!</h1>
  <form action={ctx.url('post.create')} method="post">
    {ctx.csrfField()}
    <Input label="Post Content" name="content" value="" />
    <Button label="submit" type="submit" />
  </form>
  <ol>
    {user.posts?.map((post) => <li>
      {post.content}
    </li>)}
  </ol>
</App>