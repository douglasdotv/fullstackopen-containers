import { useEffect, useState } from 'react';
import { fetchTodos, createTodo, deleteTodo, completeTodo } from '../api/todos';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoView = () => {
  const [todos, setTodos] = useState([]);

  const refreshTodos = async () => {
    const response = await fetchTodos();
    setTodos(response.data);
  };

  useEffect(() => {
    refreshTodos();
  }, []);

  const handleCreateTodo = async (todo) => {
    const { data } = await createTodo(todo);
    setTodos([...todos, data]);
  };

  const handleDeleteTodo = async (todo) => {
    await deleteTodo(todo._id);
    refreshTodos();
  };

  const handleCompleteTodo = async (todo) => {
    await completeTodo(todo._id, {
      text: todo.text,
      done: true,
    });
    refreshTodos();
  };

  return (
    <>
      <h1>Todos</h1>
      <TodoForm createTodo={handleCreateTodo} />
      <TodoList
        todos={todos}
        deleteTodo={handleDeleteTodo}
        completeTodo={handleCompleteTodo}
      />
    </>
  );
};

export default TodoView;
