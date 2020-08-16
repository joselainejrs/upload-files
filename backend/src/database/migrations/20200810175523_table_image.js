
exports.up = function(knex) {
    return knex.schema.createTable('images', function (table){
        table.increments('id')
        table.string('name').notNullable();
        table.decimal('size').notNullable();
        table.string('key').notNullable();
        table.string('url').notNullable();
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('images');
};
