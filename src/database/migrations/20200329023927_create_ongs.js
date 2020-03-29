
const TABLENAME = 'organizations'

exports.up = function(knex) {
  return knex.schema.createTable(TABLENAME, function (table) {
    table.string('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('whatsapp').notNullable()
    table.string('city').notNullable()
    table.string('uf', 2).notNullable()
    table.datetime('created_at').notNullable()
    table.datetime('updated_at').notNullable()
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable(TABLENAME)
};
