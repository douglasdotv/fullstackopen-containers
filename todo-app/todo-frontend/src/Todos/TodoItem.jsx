const TodoItem = ({ todo, onDelete, onComplete }) => {
  const doneInfo = (
    <>
      <span>This todo is done</span>
      <span>
        <button onClick={() => onDelete(todo)}>Delete</button>
      </span>
    </>
  );

  const notDoneInfo = (
    <>
      <span>This todo is not done</span>
      <span>
        <button onClick={() => onDelete(todo)}>Delete</button>
        <button onClick={() => onComplete(todo)}>Set as done</button>
      </span>
    </>
  );

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '70%',
        margin: 'auto',
      }}
    >
      <span>{todo.text}</span>
      {todo.done ? doneInfo : notDoneInfo}
    </div>
  );
};

export default TodoItem;
