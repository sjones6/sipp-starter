import { h, RequestContext } from 'sipp';

export const Nav = ({ ctx }: { ctx: RequestContext }) => (
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between">
      <a href="/">
        <h1 class="text-2xl text-white font-bold">Sipp Starter</h1>
      </a>
      <div class="self-center text-white">
        {ctx.req.user ? (
          <a href={ctx.url.alias('logout')}>logout</a>
        ) : (
          <a href={ctx.url.alias('login')}>login</a>
        )}
      </div>
    </div>
  </nav>
);
