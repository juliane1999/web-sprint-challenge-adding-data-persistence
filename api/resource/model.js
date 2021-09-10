// build your `Resource` model here
const db = require('../../data/dbConfig')

function getResource() { 
    return db('resource as r')
    .select('r.*')
}

async function postResource(resource) {
    const [resource_id] = await db('resource').insert(resource);
    return postResource().where({ resource_id }).first();
  }

  module.exports = {
    getResource,
    postResource,
  }