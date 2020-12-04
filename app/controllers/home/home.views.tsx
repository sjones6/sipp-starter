import { RequestContext, Resolve, View } from 'sipp';
import { App } from '@app/view/App';
import { Post } from '@app/models';

interface HomeProps {
  title: string
  header: string
}

export class HomeView extends View {
  constructor(private readonly props: HomeProps, private readonly posts: Post[]) { 
    super()
  }

  @Resolve()
  render(h, ctx: RequestContext): string {
    return <App title={this.props.title} ctx={ctx}>
      <h1 class='text-2xl text-gray-800'>{this.props.header}</h1>
      {this.posts.map(post => <div>
        <p>
         "{post.content}"
        </p>
        <p>~ {post.user.first_name} {post.user.last_name} </p>
      </div>)}
    </App>
  }
}