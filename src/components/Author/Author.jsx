import React from 'react';
import style from './Author.module.scss';

const Author = () => {
  return (
    <div className={style.author}>
      <p className={style.text}>
        Developed by
        <a href="https://t.me/boiko_dmitry" target="_blank" rel="noreferrer">
          Dmitry Boyko
        </a>
      </p>
    </div>
  );
};

export default Author;
