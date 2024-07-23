import React from 'react';
import style from './Footer.module.scss';

const Footer = ({ todos, setTodos }) => {
  const completeTodos = todos.filter((todo) => todo.state);

  const handleClearFunc = () => {
    setTodos([]);
  };

  return (
    <footer className={style.footer}>
      <p className={style.text}>{todos.length} item selected</p>
      <p className={style.text}>{completeTodos.length} item done</p>
      <button type="submit" className={style.btn} onClick={handleClearFunc}>
        Clear All
      </button>
    </footer>
  );
};

export default Footer;
