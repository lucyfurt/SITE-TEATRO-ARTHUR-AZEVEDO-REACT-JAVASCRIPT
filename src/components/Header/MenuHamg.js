import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './menuHamb.css';

const MyMenu = () => {
  return (
    <div className="menu-wrapper">
      <h1>Menu</h1>
      <Menu>
        <a className="menu-item" href="/">
          O Teatro
        </a>
        <a className="menu-item" href="/about">
          Institucional
        </a>
        <a className="menu-item" href="/services">
          Pautas
        </a>
        <a className="menu-item" href="/contact">
          Informações Técnicas
        </a>
        <a className="menu-item" href="/contact">
        Núcleo de Memória e Pesquisa
        </a>
      </Menu>
    </div>
  );
};

export default MyMenu;
