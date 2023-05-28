import React from 'react';
import { Menu } from 'antd';
import { useState } from 'react';
import './Menu.css'
import logo from '../../assets/logo.png'
const items = [

  {
    label: 'O Teatro',
    key: 'SubMenu',


    children: [
      {
        type: 'group',

        children: [
          {
            label: (
              <a href='/institucional'>
                Institucional
              </a>

            ),
            key: 'setting:1',
          },
          {
            label: (
              <a href='/historia' rel='noopener noreferrer'>
                História
              </a>

            ),
            key: 'setting:2',
          },
          {
            label: (
              <a href='/info' rel='noopener noreferrer'>
                Informações técnicas
              </a>

            ),
            key: 'setting:2',
          },
          
        ],
      },

    ],
  },
  {
    label: 'Shows/Espetáculos',
    key: 'shows',
    children: [
      {
        type: 'group',

        children: [
          {
            label: (
              <a href='/eventos' rel='noopener noreferrer'>
                Mensal
              </a>

            ),
            key: 'setting:7',
          },
          ,

        ],
      },

    ],
  },
  {
    label: 'Pautas',
    key: 'pauta',
    children: [
      {
        type: 'group',

        children: [
          {
            label: (
              <a href='/pauta' rel='noopener noreferrer'>
                Reserva de pautas
              </a>

            ),
            key: 'setting:7',
          },
          ,

        ],
      },

    ],
  },
  {
    label: 'Núcleo de Memória e Pesquisa',
    key: 'nmp',
    children: [
      {
        type: 'group',

        children: [
          {
            label: (
              <a href='/biblioteca' rel='noopener noreferrer'>
                Biblioteca Arão Paranaguá
              </a>

            ),
            key: 'setting:8',
          },

        ],
      },

    ],
  },

];
const App = () => {
  const [current, setCurrent] = useState();
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div className="app-header">
      <a href='/index'><img src={logo} alt="Logo" className="app-logo" /></a>
      <Menu selectedKeys={[current]} mode="horizontal" items={items} className="app-menu" />
    </div>
  )

};
export default App;