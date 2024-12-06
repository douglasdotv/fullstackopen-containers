const express = require('express');
const { Todo } = require('../mongo');

const router = express.Router();

router.get('/', async (_req, res) => {
  const todos = await Todo.find({});
  res.send(todos);
});

router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  });
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  req.todo = await Todo.findById(id);

  if (!req.todo) {
    return res.sendStatus(404);
  }

  next();
};

singleRouter.delete('/', async (req, res) => {
  await req.todo.delete();
  res.sendStatus(200);
});

singleRouter.get('/', async (_req, res) => {
  res.sendStatus(405); // Implement this
});

singleRouter.put('/', async (_req, res) => {
  res.sendStatus(405); // Implement this
});

router.use('/:id', findByIdMiddleware, singleRouter);

module.exports = router;
