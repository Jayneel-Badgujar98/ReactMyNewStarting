import React, { useReducer, useState } from 'react';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

const TodoWithReducer = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() === '') return;
    dispatch({ type: 'ADD_TODO', payload: input });
    setInput('');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">useReducer Todo App</h1>
      <input
        className="border p-2 mr-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAdd}>
        Add
      </button>

      <ul className="mt-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center my-2">
            <span
              onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
              className={`cursor-pointer ${todo.completed ? 'line-through text-green-600' : ''}`}
            >
              {todo.text}
            </span>
            <button
              className="text-red-600"
              onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoWithReducer;
