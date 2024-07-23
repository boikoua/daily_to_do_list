import React from 'react';
import style from './TodoList.module.scss';
import todosFromServer from './../../api/todos';
import Todo from './Todo/Todo';

const TodoList = () => {
  return (
    <section className={style.list}>
      <Todo />
      <Todo />
    </section>
  );
};

export default TodoList;
