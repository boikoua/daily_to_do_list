import React, { useState } from 'react';
import style from './NewTodo.module.scss';

const NewTodo = ({ todos, setTodos }) => {
  const [value, setValue] = useState('');

  const newTodo = (text) => {
    if (text.trim().length) {
      return { id: todos.length + 1, title: text, state: false };
    }
  };

  const handleSubmitFunc = (event) => {
    event.preventDefault();
    if (newTodo(value)) {
      setTodos([...todos, newTodo(value)]);
    }
    setValue('');
  };

  return (
    <form action="" className={style.form} onSubmit={handleSubmitFunc}>
      <input
        type="text"
        placeholder="Add new list item"
        className={style.input}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" className={style.btn}>
        Add
      </button>
    </form>
  );
};

export default NewTodo;
