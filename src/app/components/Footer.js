import React from 'react';
import './index.scss';

function Footer(className) {
  return (
    <footer className={className}>
      © Copyright by Marta | {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
