// build your `Resource` model here
const db = require('../../data/dbConfig')

function getResource() { 
    return db('resources as r')
    .select('r.*')
}

  
  function postResource(resource) {
    return db('resources').insert(resource)
    .then(([resource_id]) => {
        return db('resources').where('resource_id', resource_id).first()
    })
}

  module.exports = {
    getResource,
    postResource,
  }