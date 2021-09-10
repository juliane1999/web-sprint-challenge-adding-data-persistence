// build your `Task` model here
const db = require('../../data/dbConfig')

// function getPostsBy() {
//   return db('tasks as t')
//   .leftJoin('projects as p', 'p.projects_id', 't.projects_id')
//   .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_id')
//   .where('t.task_id', task_id)
// }

// async function createTask(task) {
//   const [task_id] = await db('tasks').insert(task)
//   return getTasks().where({ task_id }).first()
// }

// module.exports = {
// getPostsBy
// }



module.exports = {
  async getPostsBy(project_id) {
    const result = await db('tasks as t')
      .leftJoin('projects as p', 't.project_id', 'p.id') 
      .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed','p.project_id', 'p.project_name', 'p.project_completed', 'p.project_description')
      .where('p.id', project_id) 

    return result
  },

  async getUserBy(project_id) {
    const rows = await db('projects as p')
      .leftJoin('tasks as t', 't.project_id', 'p.id') 
      .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed','p.project_id', 'p.project_name', 'p.project_completed', 'p.project_description')
      .where('p.id', project_id) 

    
    const result = { 
      project_id: rows[0].project_id,
      project_name: rows[0].project_name,
      project_completed: rows[0].project_completed,
      project_description: rows[0].project_description,
      tasks: rows.map(r => ({
        task_description: r.task_description,
        task_id: r.task_id,
        task_completed:r.task_completed,
        task_notes:r.task_notes,
      })),
    }

    return result
  }
}