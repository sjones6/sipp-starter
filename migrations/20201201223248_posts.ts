import * as Knex from "knex";

const tableName = 'posts';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable(tableName, function (table) {
      table.increments('id');
      table.text('content').notNullable();
      table.integer('user_id', 255).notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
