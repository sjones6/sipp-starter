import { App } from 'sipp';
import { controllers } from './controllers';
import { config } from './config';
import { init } from './auth';
import { providers } from './providers';

App.bootstrap(config)
  .withGlobalMiddleware(...init)
  .withControllers(...controllers)
  .withProviders(...providers)
  .wire()
  .then((app) => {
    app.listen();
  });
