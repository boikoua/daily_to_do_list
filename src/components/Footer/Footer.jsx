import React from 'react';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p className="text">3 item selected</p>
      <p className="text">2 item done</p>
      <button type="submit" className="text">
        Clear All
      </button>
    </footer>
  );
};

export default Footer;
