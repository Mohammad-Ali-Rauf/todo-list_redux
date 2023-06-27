import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './redux/slices/todoSlice';

const App = () => {
  const {todos} = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const markCompleted = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const markNotCompleted = (id: string) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="container-fluid text-center">
      <h1 className="display-1 fw-semibold">Todo List</h1>
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control fs-3"
              placeholder="Enter a new todo..."
              aria-label="Enter a new todo"
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
            />
            <button className="btn btn-success btn-lg fw-bold" type="button" onClick={() => dispatch(addTodo(todoText))}>
              Add Todo
            </button>
          </div>
          <ul className="list-group">
            {todos.map((todo: any) => (
              <li
                className={`list-group-item d-flex justify-content-between align-items-center ${
                  todo.completed ? 'text-success' : 'text-danger'
                }`}
                key={todo.id}
              >
                {todo.text}
                <div>
                  {!todo.completed ? (
                    <button className="btn btn-primary btn-sm me-2 btn-lg" onClick={() => markCompleted(todo.id)}>
                      Mark as Completed
                    </button>
                  ) : (
                    <button className="btn btn-warning btn-sm me-2 btn-lg" onClick={() => markNotCompleted(todo.id)}>
                      Mark as Not Completed
                    </button>
                  )}
                  <button className="btn btn-danger btn-sm btn-lg" onClick={() => dispatch(deleteTodo(todo.id))}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
