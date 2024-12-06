import apiClient from './apiClient';

export const fetchTodos = () => apiClient.get('/todos');
export const createTodo = (todo) => apiClient.post('/todos', todo);
export const deleteTodo = (id) => apiClient.delete(`/todos/${id}`);
export const completeTodo = (id, updatedTodo) =>
  apiClient.put(`/todos/${id}`, updatedTodo);
