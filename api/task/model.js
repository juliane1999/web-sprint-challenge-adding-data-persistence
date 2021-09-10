// build your `Task` model here
const db = require('../../data/dbConfig')



module.exports = {
  async getPostsBy(project_id) {
    const result = await db('tasks as t')
      .join('projects as p', 't.project_id', 'p.id') 
      .select('t.id as task_id', 'task_description', 'project_name')
      .where('p.id', project_id) 

    return result
  },

  async getUserBy(project_id) {
    const rows = await db('projects as p')
      .leftJoin('tasks as t', 't.project_id', 'p.id') 
      .select('t.id as task_id', 'task_description', 'project_name', 'p.id as project_id')
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

