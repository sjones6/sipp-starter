import 'dotenv';
import Knex from 'knex';
import { resolve } from 'path';

// Determines the path whether or not knex is in make or run mode
const determinePathConfig = (): [string, string] => {
  const args = process.argv.join(' ');
  const inMakeMode = /[migrate|seed]:make/.test(args);
  if (inMakeMode) {
    return ['ts', resolve(process.cwd(), 'db')];
  }
  return ['js', __dirname];
};
const [extension, basePath] = determinePathConfig();

const migrations = {
  extension,
  directory: resolve(basePath, 'migrations'),
  tableName: '_migrations',
  loadExtensions: ['.js'],
};

/**
 * Development DB Config
 */
export const development: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: resolve(process.cwd(), './tmp/db.sqlite3'),
  },
  migrations,
  seeds: {
    extension,
    directory: resolve(basePath, 'seeds'),
    loadExtensions: ['.js'],
  },
  useNullAsDefault: true,
};

/**
 * Production DB Config
 */
export const production: Knex.Config = {
  client: 'pg',
  connection: {
    port: parseInt(process.env.DATABASE_PORT),
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_ACCESS_KEY,
  },
  pool: {
    min: process.env.DATABASE_POOL_MIN
      ? parseInt(process.env.DATABASE_POOL_MIN)
      : 2,
    max: process.env.DATABASE_POOL_MAX
      ? parseInt(process.env.DATABASE_POOL_MAX)
      : 10,
  },
  migrations,
};
