import { App } from '@sjones6/sipp';
import { controllers } from './controllers';
import { config } from './config'

App.bootstrap(config)
  .withControllers(controllers)
  .listen();