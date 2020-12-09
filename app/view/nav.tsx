import { User } from '../models';
import { h, Url } from 'sipp';

interface Props {
  url: Url;
  user?: User;
}

export const Nav = ({ url, user }: Props) => (
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between">
      <a href="/">
        <h1 class="text-2xl text-white font-bold">Sipp Starter</h1>
      </a>
      <div class="self-center text-white">
        {user ? (
          <a href={url.alias('logout')}>logout</a>
        ) : (
          <a href={url.alias('login')}>login</a>
        )}
      </div>
    </div>
  </nav>
);
