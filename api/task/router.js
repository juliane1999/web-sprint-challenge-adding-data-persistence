// build your `/api/tasks` router here

const express = require('express')
const Task = require('./model')
const router = express.Router()
// const db = require('../../data/dbConfig')

// router.get('/', (req, res, next) => {
//     Task.getTasks()
//         .then(tasks => {
//             res.status(200).json(tasks)
//         })
//         .catch(next)
// })

// router.get('/', async (req, res, next) => {
//   try {
//     const user = await Task.getUserBy(req.params.id)
//     res.json(user)
//   } catch (err) {
//     next(err)
//   }
// });

// router.get('/', async (req, res, next) => {
//   try {
//     res.json(await Task.getPostsBy(req.params.id))
//   } catch (err) {
//     next(err)
//   }
// })

router.get('/', (req, res, next) => {
  Task.getPostsBy()
    .then(task => {
      res.json(task)
    })
    .catch(next)
})

router.post("/", (req, res,next) => {
  const userData = req.body;

Task.getUserBy(userData)
    .then(data => {
      res.status(201).json(data)
    })
    .catch(next)
});

module.exports = router
