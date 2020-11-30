import * as Knex from "knex";

const tableName = 'users';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTableIfNotExists(tableName, function (table) {
      table.increments('id');
      table.string('first_name', 255).notNullable();
      table.string('last_name', 255).notNullable();
      table.string('email', 255).notNullable();
      table.string('password', 255).notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(tableName);
}
