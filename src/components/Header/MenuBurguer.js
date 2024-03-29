import React, { useState } from 'react';
import '../Header/css/ResponsiveMenu.css';
import logoImage from '../../assets/logo.png'
import menuIconOpen from '../../assets/img/close_white_36dp.svg';
import menuIconClose from '../../assets/img/menu_white_36dp.svg';

const ResponsiveMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuShow = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };
  return (
    <header>
      <nav className="nav-bar">
        <div className="logo">
          <img src={logoImage} alt="Logo" style={{ width: '80px' }} />
        </div>
        <div className="nav-list">
          <ul>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/teatro" className="nav-link">
                O Teatro
              </a>
            </li>
            <li className="nav-item">
              <a href="/institucional" className="nav-link">
                Institucional
              </a>
            </li>
            <li className="nav-item">
              <a href="/pautas" className="nav-link">
                Pautas/Editais
              </a>
            </li>
            <li className="nav-item">
              <a href="/tecnico" className="nav-link">
                Informação Técnica
              </a>
            </li>
            <li className="nav-item">
              <a href="/nmp" className="nav-link">
                Núcleo de Memória e Pesquisa
              </a>
            </li>
            <li className="nav-item">
              <a href="/nae" className="nav-link">
                Núcleo Arte Educação
              </a>
            </li>

          </ul>
        </div>

        <div className="mobile-menu-icon">
          <button onClick={menuShow}>
            <img
              className="icon"
              src={isMobileMenuOpen ? menuIconOpen : menuIconClose}
              alt="Menu Icon"
            />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/teatro" className="nav-link">
              O Teatro
            </a>
          </li>
          <li className="nav-item">
            <a href="/institucional" className="nav-link">
              Institucional
            </a>
          </li>
          <li className="nav-item">
            <a href="/pautas" className="nav-link">
              Pautas/Editais
            </a>
          </li>
          <li className="nav-item">
            <a href="/tecnico" className="nav-link">
              Informação Técnica
            </a>
          </li>
          <li className="nav-item">
            <a href="/nmp" className="nav-link">
              Núcleo de Memória e Pesquisa
            </a>
          </li>
          <li className="nav-item">
            <a href="/nae" className="nav-link">
              Núcleo Arte Educação
            </a>
          </li>

        </ul>
      </div>
    </header>
  );
};
export default ResponsiveMenu;