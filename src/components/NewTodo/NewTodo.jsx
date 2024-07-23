import React from 'react';
import style from './NewTodo.module.scss';

const NewTodo = () => {
  return (
    <form action="" className={style.form}>
      <input
        type="text"
        placeholder="Add new list item"
        className={style.input}
      />
      <button type="submit" className={style.btn}>
        Add
      </button>
    </form>
  );
};

export default NewTodo;
