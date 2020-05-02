
exports.up = function(knex) {
    return knex.schema.createTable('Projects', tbl => {
        tbl.increments();
        tbl.string('ProjectName')
        .notNullable();
        tbl.string("ProjectDescription")
        .notNullable();
        tbl.boolean('Completed');
    })
    .createTable('Tasks', tbl => {
        tbl.increments();
        tbl.string('TaskDescription')
        .notNullable();
        tbl.string('notes');
        tbl.boolean('Completed');
        tbl.integer('Project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('Resources', tbl => {
        tbl.increments();
        tbl.string("ResourcesName")
        .notNullable();
        tbl.string("ResourceDescription");
        tbl.integer('Project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('Resources')
  .dropTableIfExists('Tasks')
  .dropTableIfExists('Projects');
};
