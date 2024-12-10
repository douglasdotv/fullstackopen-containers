const express = require('express');
const router = express.Router();
const configs = require('../util/config');
const { getTodosCounter } = require('../redis/todosCounter');

let visits = 0;

router.get('/', async (_req, res) => {
  visits++;

  res.send({
    ...configs,
    visits,
  });
});

router.get('/statistics', async (_req, res) => {
  res.json({
    added_todos: getTodosCounter(),
  });
});

module.exports = router;
