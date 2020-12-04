import { App, RequestContext } from '@sjones6/sipp';
import { controllers } from './controllers';
import { config } from './config'
import { init, Auth } from './auth';

App.bootstrap(config)
  .withGlobalMiddleware(
    ...init
  )
  .withControllers(...controllers)
  .withResolver(resolver => {
    resolver.addResolver(Auth, (ctx: RequestContext) => new Auth(ctx.req.user))
  })
  .listen();