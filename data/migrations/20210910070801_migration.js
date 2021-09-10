
exports.up = function(knex) {
    return knex.schema

    .createTable('projects', table => {
      table.increments('project_id')
      table.string('project_name')
        .notNullable();
        table.string('project_description')
        table.boolean('project_completed')
        .notNullable()
        .defaultTo(false);
    })

    .createTable('resources', table => {
      table.increments('resource_id')
      table.string('resource_name')
        .unique()
        .notNullable();
        table.string('resource_description')
    })

    .createTable('tasks', table => {
      table.increments('task_id')
      table.string('task_description')
      .notNullable();
      table.string('task_notes')
      table.boolean('task_completed')
      .notNullable()
      .defaultTo(false);

      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
    })

    .createTable('project_resources', table => {
      table.increments()
      table.timestamps(true, true)

      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onUpdate('CASCADE')
        
      table.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('resource_id')
      .inTable('resources')
      .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('projects')
      .dropTableIfExists('resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('project_resources');
};
