import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      {todos
        .map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onDelete={deleteTodo}
            onComplete={completeTodo}
          />
        ))
        .reduce(
          (acc, cur) => [...acc, <hr key={`${cur.key}-divider`} />, cur],
          []
        )}
    </>
  );
};

export default TodoList;
