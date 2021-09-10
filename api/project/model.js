// build your `Project` model here
const db = require('../../data/dbConfig')

function getProject() { 
    return db('projects as p')
    .select('p.*')
}

async function postProject(project) {
    const [project_id] = await db('projects').insert(project);
    return postProject().where({ project_id }).first();
  }

  module.exports = {
    getProject,
    postProject,
  }