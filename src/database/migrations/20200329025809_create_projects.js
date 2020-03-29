
const ORGANIZATION_TABLENAME = 'organizations'
const ORGANIZATION_COLUMN = 'organization_id'
const TABLENAME = 'projects'


exports.up = function(knex) {
  return knex.schema.createTable(TABLENAME, function (table) {
    table.string('id').primary()
    table.string(ORGANIZATION_COLUMN).notNullable()
    table.string('title').notNullable()
    table.string('description').notNullable()
    table.decimal('amount').notNullable()
    table.datetime('created_at').notNullable()
    table.datetime('updated_at').notNullable()
    table.datetime('deleted_at').notNullable()

    table.foreign(ORGANIZATION_COLUMN).references('id').inTable(ORGANIZATION_TABLENAME)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable(TABLENAME)
};
