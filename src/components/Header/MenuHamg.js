import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './menuHamb.css';

const MyMenu = () => {
  return (
    <Menu>
      <a className="menu-item" href="/teatro">
        O Teatro
      </a>
      <a className="menu-item" href="/institucional">
        Institucional
      </a>
      <a className="menu-item" href="/pautas">
        Pautas
      </a>
      <a className="menu-item" href="/tecnico">
        Informações Técnicas
      </a>
      <a className="menu-item" href="/nmp">
        Núcleo de Memória e Pesquisa
      </a>
    </Menu>
  );
};

export default MyMenu;
