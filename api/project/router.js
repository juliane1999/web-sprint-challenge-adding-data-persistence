// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');
const router = express.Router();

router.get('/', (req, res, next) => {
    Project.getProject()
      .then(project => {
        res.json(project)
      })
      .catch(next)
  })

  router.post('/', (req, res, next) => {
    Project.postProject(req.body)
      .then(project => {
        res.status(201).json(project);
      })
      .catch(next);
  });
  
  
  module.exports = router;
  