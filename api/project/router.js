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

  // router.post('/:scheme_id/steps', checkSchemeId, validateStep, (req, res, next) => {
//     const step = req.body
//     const { scheme_id } = req.params
  
//     Schemes.addStep(scheme_id, step)
//       .then(allSteps => {
//         res.status(201).json(allSteps)
//       })
//       .catch(next)
//   })

// router.post("/", (req, res) => {
//     const userData = req.body;
  
//     db("users")
//       .insert(userData, "id")
//       .then(ids => {
//         res.status(201).json({ created: ids[0] });
//       })
//       .catch(err => {
//         res.status(500).json({ message: "Failed to create new user" });
//       });
//   });
  
  
  module.exports = router;
  