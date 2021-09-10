// build your `/api/projects` router here
const express = require('express');
const Project = require('../project/model');
const router = express.Router();
// const db = require('../../data/dbConfig')

// router.get('/', (req, res, next) => {
// Project.getProject()
//     .then(project => {
//       res.json(project);
//     })
//     .catch(err => {
//       next(err);
//     })
//   })

  

//   router.post("/", (req, res,next) => {
//     const projectData = req.body;
  
// Project.postProject()
//       .insert(projectData, 'project_id')
//       .then(ids => {
//         res.status(201).json({ created: ids[0] });
//       })
//       .catch(next)
//   });

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
  