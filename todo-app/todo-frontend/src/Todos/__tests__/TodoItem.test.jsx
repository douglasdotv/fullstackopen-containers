import { render, screen } from '@testing-library/react';
import TodoItem from '../TodoItem';

describe('TodoItem component', () => {
  const mockDelete = vi.fn();
  const mockComplete = vi.fn();
  const todo = {
    text: 'Write tests',
    done: false,
    _id: '1234',
  };

  it('Should display todo text', () => {
    render(
      <TodoItem todo={todo} onDelete={mockDelete} onComplete={mockComplete} />
    );
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  it('Should display both buttons for incomplete todo', () => {
    render(
      <TodoItem todo={todo} onDelete={mockDelete} onComplete={mockComplete} />
    );
    expect(screen.getByText('Delete')).toBeInTheDocument();
    expect(screen.getByText('Set as done')).toBeInTheDocument();
  });

  it('Should display only delete button for completed todo', () => {
    const completedTodo = { ...todo, done: true };
    render(
      <TodoItem
        todo={completedTodo}
        onDelete={mockDelete}
        onComplete={mockComplete}
      />
    );
    expect(screen.getByText('Delete')).toBeInTheDocument();
    expect(screen.queryByText('Set as done')).not.toBeInTheDocument();
  });
});
