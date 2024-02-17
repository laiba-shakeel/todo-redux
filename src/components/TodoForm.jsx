import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todosSlice';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo({ id: Date.now(), text }));
      setText('');
    }
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
