import { App } from '@sjones6/sipp';
import { controllers } from './controllers';
import { config } from './config'
import { init } from './auth';

App.bootstrap(config)
  .withGlobalMiddleware(
    ...init
  )
  .withControllers(...controllers)
  .listen();