import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './menuHamb.css';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="menu-container">
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
        <span className="menu-title">Menu</span>
      </div>
    </div>
  );
};

export default Header;
