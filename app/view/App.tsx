import { h, RequestContext } from 'sipp';
import { Nav } from './nav';
import { Alerts } from './alerts';

interface AppProps {
  title: string,
  ctx: RequestContext,
  children?: any,
}

export const App = (props: AppProps): string => <html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"></meta>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/turbolinks/5.2.0/turbolinks.js" defer></script>
    <title>{ props.title }</title>
  </head>
  <body class="bg-gray-100">
    <Nav ctx={props.ctx} />
    <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
      <Alerts session={props.ctx.session} />
     {props.children}
    </div>
  </body>
</html>