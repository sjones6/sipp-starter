/**
 * This file is only here to help interop with Knex and TypeScript
 * 
 * Do not edit this file!
 * 
 * Edit ./db/knexfile.ts instead!
 */

try {
  require.resolve('./dist/db/knexfile');
} catch (err) {
  console.error(`The compiled knex config does not exist. Build first and then retry the command: npm run build.`)
}

module.exports = require('./dist/db/knexfile');
