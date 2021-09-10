// build your `Task` model here
const db = require('../../data/dbConfig')

function getTask() { 
    return db('task as t')
    .select('t.*')
}

async function postTask(task) {
    const [task_id] = await db('task').insert(task);
    return postTask().where({ task_id }).first();
  }

  module.exports = {
    getTask,
    postTask,
  }