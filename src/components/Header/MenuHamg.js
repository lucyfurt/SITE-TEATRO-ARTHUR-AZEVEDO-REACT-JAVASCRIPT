import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './menuHamb.css';

const MyMenu = () => {
  return (
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
  );
};

export default MyMenu;
