import { App } from '@sjones6/ts-mvc';
import { controllers } from './routes';
import { config } from './config'

App.bootstrap(config)
  .withControllers(controllers)
  .listen();