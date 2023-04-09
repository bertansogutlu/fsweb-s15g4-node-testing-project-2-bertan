/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  const all = knex.schema.createTable("Gorevler",(table)=>{
    table.increments("GorevID")
    table.string("Adi").notNullable
    table.string("Aciklama").notNullable
  })
  .createTable("Tasklar",(table)=>{
    table.increments("TaskID")
    table.string("Adi").notNullable
    table.string("Aciklama").notNullable
    table.integer("GorevID").references("GorevID").inTable("Gorevler").onDelete("CASCADE").onUpdate("CASCADE")
  })
  return all;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("Tasklar")
  .dropTableIfExists("Gorevler")
};
