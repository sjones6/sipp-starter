import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('shops', function (table) {
      table.increments('id');
      table.string('shop_name', 255).notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTable("shops");
}
