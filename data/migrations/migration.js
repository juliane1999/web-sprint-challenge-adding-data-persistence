exports.up = function (knex) {
    return knex.schema

      .createTable('projects', tbl => {
        tbl.increments('project_id');
        tbl.string('project_name')
          .notNullable();
      })

      .createTable('resources', tbl => {
        tbl.increments('resource_id');
        tbl.string('resource_name')
          .unique()
          .notNullable();
      })

      .createTable('tasks', tbl => {
        tbl.increments('task_id');
        tbl.string('task_description')
          .notNullable();

        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('project_id')
          .inTable('project')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      })

      .createTable('project_resources', tbl => {

        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('project_id')
          .inTable('projects')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');

          
        tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      })
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists('projects')
      .dropTableIfExists('resources')
      .dropTableIfExists('tasks');
  };
  