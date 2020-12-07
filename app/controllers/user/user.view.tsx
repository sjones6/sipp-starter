import { Csrf, Url, Provide } from 'sipp';
import { App } from '@app/view/App';
import { Button, TextArea } from '@app/view/components';
import { Auth } from '@app/auth';

export class ProfileView extends App {
  @Provide()
  renderBody(h, auth: Auth, url: Url, csrf: Csrf) {
    const { user } = auth;
    return <div>
      <h1>Welcome, {user.first_name}!</h1>
        <form action={url.alias('post.create')} method="post">
          {csrf.csrfField()}
          <TextArea label="Post Content" name="content" value="" />
          <Button label="submit" type="submit" />
        </form>
        <ol>
          {user?.posts?.map((post) => (
            <li>{post.content}</li>
          ))}
        </ol>
    </div>;
  }
}
