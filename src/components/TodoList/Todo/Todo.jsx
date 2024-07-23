import React, { useState } from 'react';
import style from './Todo.module.scss';

const Todo = ({ id, title, state, toggleTodoState }) => {
  const [stateElem, setStateElem] = useState(state);

  const handleClickFunc = () => {
    setStateElem(!stateElem);
    toggleTodoState(id);
  };

  return (
    <article className={style.todo}>
      <span
        className={
          stateElem ? `${style.state} ${style.active}` : `${style.state}`
        }
        onClick={handleClickFunc}
      ></span>

      <p
        className={stateElem ? `${style.text} ${style.done}` : `${style.text}`}
      >
        {title}
      </p>
    </article>
  );
};

export default Todo;
