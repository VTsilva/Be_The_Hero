 /*Metodo Up para criação de tabela e etc*/

 exports.up = function(knex) {
     return knex.schema.createTable('incidents', function(table) {
         table.increments();

         table.string('title').notNullable();
         table.string('description').notNullable();
         table.decimal('value').notNullable();

         table.string('ong_id').notNullable();

         table.foreign('ong_id').references('id').inTable('ongs');
     });
 };

 /*Metodo Down: quando algo der errado, o que fazer?*/

 exports.down = function(knex) {
     return knex.schema.dropTable('incidents');
 };