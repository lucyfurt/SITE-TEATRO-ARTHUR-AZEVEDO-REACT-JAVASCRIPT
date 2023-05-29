import React, { useState } from 'react';

import { Menu } from 'antd';
import { Row, Col } from 'antd';
import '../App.css'; 

const items = [
  {
    label: 'O Teatro',
    key: 'taa',

    children: [
      {
        label: 'Institucional',
        key: 'setting:1',
      },
      {
        label: 'História',
        key: 'setting:2',
      },
      {
        label: 'Informações Técnicas',
        key: 'setting:3',
      },
    
    ],
  },
  {
    label: (
      <a href="/eventos" target="_blank" rel="noopener noreferrer">
        Shows/Espetáculos
      </a>
    ),
    key: 'alipay',
  },
  {
    label: (
      <a href="/pautas" target="_blank" rel="noopener noreferrer">
        Pautas
      </a>
    ),
    key: 'alipay',
  },
  {
    label: 'Núcleo de Memória e Pesquisa',
    key: 'nmp',

    children: [
      {
        label: 'Biblioteca Arão Paranaguá',
        key: 'setting:1',
      },
    
    
    ],
  }
];

const App = () => {
  const [current, setCurrent] = useState('mail');

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Row align="middle">
      <Col span={4}>
        <img src="https://i.ibb.co/kJhYxVW/logo.png" alt="Logo" style={{ width: '60px' }} />
      </Col>
      <Col span={20}>
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          className="menu-right" // Adiciona a classe CSS "menu-right"
          style={{ backgroundColor: '#6d0202' }}
        >
          {items.map((item) => {
            if (item.children) {
              return (
                <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                  {item.children.map((child) => (
                    <Menu.Item key={child.key}>{child.label}</Menu.Item>
                  ))}
                </Menu.SubMenu>
              );
            }
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            );
          })}
        </Menu>

      </Col>

    </Row>
  );
};

export default App;