import React from 'react';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p className={style.text}>3 item selected</p>
      <p className={style.text}>2 item done</p>
      <button type="submit" className={style.btn}>
        Clear All
      </button>
    </footer>
  );
};

export default Footer;
