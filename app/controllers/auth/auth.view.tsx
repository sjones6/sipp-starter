import { Csrf, h, Provide, Url } from 'sipp';
import { App } from '@app/view/App';
import { Input } from '@app/view/components/Input';
import { Button } from '@app/view/components';
import { ValidationErrorCollection } from 'sipp/validation';
import { User } from '@app/models/User';

type RegistrationFormProps = {
  action: string;
  csrf: string;
  user: User;
  validation: ValidationErrorCollection;
};

const RegistrationForm = ({
  action,
  csrf,
  user,
  validation,
}: RegistrationFormProps) => (
  <form action={action} method="post">
    <Input
      label="First Name"
      value={user.first_name || ''}
      name="first_name"
      required
      error={validation.errorMessages('first_name').join(' ')}
    />
    <Input
      label="Last Name"
      value={user.last_name || ''}
      name="last_name"
      required
      error={validation.errorMessages('last_name').join(' ')}
    />
    <Input
      label="Email"
      value={user.email || ''}
      name="email"
      type="email"
      required
      error={validation.errorMessages('email').join(' ')}
    />
    <Input
      label="Password"
      value={''}
      name="password"
      type="password"
      required
      error={validation.errorMessages('password').join(' ')}
    />
    {csrf}
    <Button type="submit" label="Register" />
  </form>
);

const LoginForm = ({ action, csrf }: { action: string; csrf: string }) => (
  <form action={action} method="post">
    <Input label="Email" value={''} name="email" type="email" required />
    <Input
      label="Password"
      value={''}
      name="password"
      type="password"
      required
    />
    {csrf}
    <Button class="mb-2" type="submit" label="Login" />
  </form>
);

export class LoginView extends App {
  protected title = 'Login';

  @Provide()
  async renderBody(h, url: Url, csrf: Csrf): Promise<string> {
    return (
      <div>
        <h1 class="text-2xl text-gray-800">Login</h1>
        <LoginForm action={url.alias('login')} csrf={csrf.csrfField()} />
        <div>
          Don't have an account?{' '}
          <a
            class="underline hover:font-bold"
            href={url.alias('show.register')}
          >
            Register
          </a>
        </div>
      </div>
    );
  }
}

export class RegistrationView extends App {
  protected title = 'Register';

  constructor(
    private readonly user: User = new User(),
    private readonly validation: ValidationErrorCollection = new ValidationErrorCollection(
      [],
    ),
  ) {
    super();
  }

  @Provide()
  async renderBody(h, url: Url, csrf: Csrf): Promise<string> {
    const { user, validation } = this;
    return (
      <div>
        <h1 class="text-2xl text-gray-800">Login</h1>
        <RegistrationForm
          action={url.alias('register')}
          user={user}
          csrf={csrf.csrfField()}
          validation={validation}
        />
        <div>
          Already have an account?{' '}
          <a class="underline hover:font-bold" href={url.alias('show.login')}>
            Login
          </a>
        </div>
      </div>
    );
  }
}
