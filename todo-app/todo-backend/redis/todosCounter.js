const { getAsync, setAsync } = require('./index');

let addedTodos = 0;

const initializeTodosCounter = async () => {
  const count = await getAsync('added_todos');
  addedTodos = count ? parseInt(count) : 0;
};

initializeTodosCounter();

const getTodosCounter = () => addedTodos;

const incrementTodosCounter = async () => {
  addedTodos++;
  await setAsync('added_todos', addedTodos);
};

module.exports = {
  getTodosCounter,
  incrementTodosCounter,
};
