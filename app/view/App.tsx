import { h, Provide, Session, Url, View } from 'sipp';
import { Nav } from './nav';
import { Alerts } from './alerts';
import { Auth } from '../auth';

export class App extends View {
  protected title: string = 'Sipp Starter';

  @Provide()
  async render(h, auth: Auth, url: Url, session: Session): Promise<string> {
    return (
      <html>
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,shrink-to-fit=no"
          ></meta>
          <link
            href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
            rel="stylesheet"
          ></link>
          <script
            src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
            defer
          ></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/turbolinks/5.2.0/turbolinks.js"
            defer
          ></script>
          <title>{this.title}</title>
          {await this.renderHead(h)}
        </head>
        <body class="bg-gray-100">
          <Nav user={auth.user} url={url} />
          <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <Alerts session={session} />
            {await this.renderBody(h)}
          </div>
        </body>
      </html>
    );
  }

  async renderHead(h, ...args: any[]): Promise<string> {
    return '';
  }

  async renderBody(h, ...args: any[]): Promise<string> {
    return '';
  }
}
