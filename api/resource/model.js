// build your `Resource` model here
const db = require('../../data/dbConfig')

function getResource() { 
    return db('resources as r')
    .select('r.*')
}

async function postResource(resource) {
    const [resource_id] = await db('resources').insert(resource);
    return postResource().where({ resource_id }).first();
  }

  module.exports = {
    getResource,
    postResource,
  }