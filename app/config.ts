import { IAppConfig } from 'sipp';

export const config: IAppConfig = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  static: 'public',
  session: {
    secret: process.env.SESSION_SECRET || 'keyboard cat',
  },
  csrf: {
    cookie: true,
  },
};
