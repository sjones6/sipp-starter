import { h, RequestContext } from 'sipp';
import { App } from '@app/view/App';
import { Input } from '@app/view/components/Input';
import { Button } from '@app/view/components';
import { ValidationErrorCollection } from '@sjones6/sipp/dist/validation';
import { User } from '@app/models/User';

type RegistrationFormProps = {
  action: string,
  csrf: string,
  user: User,
  validation: ValidationErrorCollection
}

const RegistrationForm = ({ action, csrf, user, validation }: RegistrationFormProps) => <form action={action} method="post">
  <Input label='First Name' value={user.first_name || ''} name='first_name' required error={validation.errorMessages('first_name').join(' ')} />
  <Input label='Last Name' value={user.last_name || ''} name='last_name' required error={validation.errorMessages('last_name').join(' ')} />
  <Input label='Email' value={user.email || ''} name='email' type='email' required error={validation.errorMessages('email').join(' ')} />
  <Input label='Password' value={''} name='password' type='password' required error={validation.errorMessages('password').join(' ')} />
  {csrf}
  <Button type='submit' label='Register' />
</form>

const LoginForm = ({ action, csrf }: { action: string, csrf: string }) => <form action={action} method="post">
  <Input label='Email' value={''} name='email' type='email' required />
  <Input label='Password' value={''} name='password' type='password' required />
  {csrf}
  <Button class="mb-2" type='submit' label='Login' />
</form>

export const login = (ctx: RequestContext): string => <App title='Login' ctx={ctx}>
  <h1 class='text-2xl text-gray-800'>Login</h1>
  <LoginForm action={ctx.url.alias('login')} csrf={ctx.csrfField()} />
  <div>
    Don't have an account? <a class="underline hover:font-bold" href={ctx.url.alias('show.register')}>Register</a>
  </div>
</App>

export const register = (ctx: RequestContext, user: User = new User(), validation: ValidationErrorCollection = new ValidationErrorCollection([])): string => <App title='Register' ctx={ctx}>
  <h1 class='text-2xl text-gray-800'>Login</h1>
  <RegistrationForm action={ctx.url.alias('register')} user={user} csrf={ctx.csrfField()} validation={validation} />
  <div>
    Already have an account? <a class="underline hover:font-bold" href={ctx.url.alias('show.login')}>Login</a>
  </div>
</App>