// build your `/api/projects` router here
const express = require('express');
const Project = require('../project/model');
const router = express.Router();

  router.get('/', async (req, res, next) => {
    try{
        const projects = await Project.getProject()
        res.status(200).json(projects)
    } catch(err) {
        next(err)
    }
})

router.post('/', (req, res, next) => {
    const projectData = req.body
    Project.postProject(projectData)
        .then(projects => {
            res.status(201).json(projects)
        })
        .catch(next)
})
  
  module.exports = router;
  