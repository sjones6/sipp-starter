import { h, RequestContext, Old } from 'sipp';
import { App } from '@app/view/App';
import { Input } from '@app/view/components/Input';
import { Button } from '@app/view/components';

export interface Props {
  title: string
  header: string
}

const RegistrationForm = ({ action, csrf, old }: { action: string, csrf: string, old: Old }) => <form action={action} method="post">
  <Input label='First Name' value={old.get<string>('first_name', '')} name='first_name' required />
  <Input label='Last Name' value={old.get<string>('last_name', '')} name='last_name' required />
  <Input label='Email' value={old.get<string>('email', '')} name='email' type='email' required />
  <Input label='Password' value={''} name='password' type='password' required />
  {csrf}
  <Button type='submit' label='Register' />
</form>

const LoginForm = ({ action, csrf, old }: { action: string, csrf: string, old: Old }) => <form action={action} method="post">
  <Input label='Email' value={old.get<string>('email', '')} name='email' type='email' required />
  <Input label='Password' value={''} name='password' type='password' required />
  {csrf}
  <Button class="mb-2" type='submit' label='Login' />
</form>

export const login = (ctx: RequestContext): string => <App title='Login' ctx={ctx}>
  <h1 class='text-2xl text-gray-800'>Login</h1>
  <LoginForm action={ctx.url('login')} old={ctx.old} csrf={ctx.csrfField()} />
  <div>
    Don't have an account? <a class="underline hover:font-bold" href={ctx.url('show.register')}>Register</a>
  </div>
</App>

export const register = (ctx: RequestContext): string => <App title='Register' ctx={ctx}>
  <h1 class='text-2xl text-gray-800'>Login</h1>
  <RegistrationForm action={ctx.url('register')} old={ctx.old} csrf={ctx.csrfField()} />
  <div>
    Already have an account? <a class="underline hover:font-bold" href={ctx.url('show.login')}>Login</a>
  </div>
</App>