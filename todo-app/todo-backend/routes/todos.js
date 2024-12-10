const express = require('express');
const { Todo } = require('../mongo');
const { incrementTodosCounter } = require('../redis/todosCounter');

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

  await incrementTodosCounter();

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

singleRouter.get('/', async (req, res) => {
  res.send(req.todo);
});

singleRouter.put('/', async (req, res) => {
  const { text, done } = req.body;

  req.todo.text = text;
  req.todo.done = done;

  await req.todo.save();
  res.send(req.todo);
});

router.use('/:id', findByIdMiddleware, singleRouter);

module.exports = router;
