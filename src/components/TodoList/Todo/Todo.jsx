import React from 'react';
import style from './Todo.module.scss';

const Todo = () => {
  return (
    <article className={style.todo}>
      <span className={`${style.state} ${style.active}`}></span>
      <p className={style.text}>New list item</p>
    </article>
  );
};

export default Todo;
