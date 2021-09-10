// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model');
const router = express.Router();

router.get('/', (req, res, next) => {
    Resource.getResource()
      .then(resource => {
        res.json(resource)
      })
      .catch(next)
  })

  router.post('/', (req, res, next) => {
    Resource.postResource(req.body)
      .then(resource => {
        res.status(201).json(resource);
      })
      .catch(next);
  });

  module.exports = router;