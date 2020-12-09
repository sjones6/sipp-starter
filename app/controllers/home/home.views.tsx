import { Provide } from 'sipp';
import { App } from '@app/view/App';
import { Post } from '@app/models';

interface HomeProps {
  title: string;
  header: string;
}

export class HomeView extends App {
  constructor(
    private readonly props: HomeProps,
    private readonly posts: Post[],
  ) {
    super();
    this.title = props.title;
  }

  async renderBody(h): Promise<string> {
    return (
      <div>
        <h1 class="text-2xl text-gray-800">{this.props.header}</h1>
        {this.posts.map((post) => (
          <div>
            <p>"{post.content}"</p>
            <p>
              ~ {post.user.first_name} {post.user.last_name} ({post.user.email})
            </p>
          </div>
        ))}
      </div>
    );
  }
}
