import { App } from '@sjones6/sipp';
import { controllers } from './controllers';
import { config } from './config';
import { init } from './auth';
import { providers } from './providers';

const app = App.bootstrap(config)
  .withGlobalMiddleware(...init)
  .withControllers(...controllers)
  .withProviders(...providers);

(async() => {
  await app.wire();
  app.listen();
})();
