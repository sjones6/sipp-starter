import { join } from 'path';
import { IAppConfig } from '@sjones6/ts-mvc';

export const config: IAppConfig = {
  static: 'public',
  db: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: async () => ({
      filename: join(process.cwd(), 'tmp', 'db.sqlite')
    })
  },
  migrations: {
    directory: join(process.cwd(), '/migrations'),
    tableName: '_migrations',
  }
}