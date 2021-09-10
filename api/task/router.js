// build your `/api/tasks` router here

const express = require('express')
const Task = require('./model')
const router = express.Router()
const db = require('../../data/dbConfig')

// router.get('/', (req, res, next) => {
//     Task.getTasks()
//         .then(tasks => {
//             res.status(200).json(tasks)
//         })
//         .catch(next)
// })

// router.post('/', async (req, res, next) => {
//     try{
//         const insert = await Task.createTask(req.body)
//         res.status(201).json(insert)
//     } catch(err) {
//         next(err)
//     }
// })

router.get('/', async (req, res, next) => {
  try {
    const user = await Task.getUserBy(req.params.id)
    res.json(user)
  } catch (err) {
    next(err)
  }
});

router.get('/', async (req, res, next) => {
  try {
    res.json(await Task.getPostsBy(req.params.id))
  } catch (err) {
    next(err)
  }
})

router.post("/", (req, res) => {
  const userData = req.body;

  db('projects')
    .insert(userData, 'project_id')
    .then(ids => {
      res.status(201).json({ created: ids[0] });
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "Failed to create new user" });
    });
});

module.exports = router
