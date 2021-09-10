// build your `/api/tasks` router here

const express = require('express')
const Task = require('./model')
const router = express.Router()

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
