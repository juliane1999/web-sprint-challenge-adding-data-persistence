// build your `Project` model here
const db = require('../../data/dbConfig')

function getProject() { 
    return db('project as p')
    .select('p.*')
}

async function postProject(project) {
    const [project_id] = await db('project').insert(project);
    return postProject().where({ project_id }).first();
  }

  module.exports = {
    getProject,
    postProject,
  }