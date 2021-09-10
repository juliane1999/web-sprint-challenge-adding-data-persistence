// build your `Task` model here
const db = require('../../data/dbConfig')

function getTask() { 
    return db('tasks as t')
    .leftJoin('projects as p', 'p.project_id', 't.project_id')
    .select('t.task_id', 't.task_name', 'p.project_name');
}

async function postTask(task) {
    const [task_id] = await db('tasks').insert(task);
    return postTask().where({ task_id }).first();
  }

  module.exports = {
    getTask,
    postTask,
  }