import { h, RequestContext, Old } from 'sipp';
import { App } from '@app/view/App';
import { User } from '@app/models/User';

export const profile = (user: User, ctx: RequestContext): string => <App title={`Welcome, ${user.first_name}!`} ctx={ctx}>
  <h1>Welcome, {user.first_name}!</h1>
</App>