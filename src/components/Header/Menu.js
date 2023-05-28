import React, { useState } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './Menu.css';
import logo from '../../assets/logo.png';

const items = [
  {
    label: 'O Teatro',
    key: 'SubMenu',
    children: [
      {
        type: 'group',
        children: [
          {
            label: <a href='/institucional'>Institucional</a>,
            key: 'setting:1',
          },
          {
            label: <a href='/historia'>História</a>,
            key: 'setting:2',
          },
          {
            label: <a href='/info'>Informações técnicas</a>,
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
            label: <a href='/eventos'>Mensal</a>,
            key: 'setting:7',
          },
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
            label: <a href='/pauta'>Reserva de pautas</a>,
            key: 'setting:7',
          },
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
            label: <a href='/biblioteca'>Biblioteca Arão Paranaguá</a>,
            key: 'setting:8',
          },
        ],
      },
    ],
  },
];

const App = () => {
  const [current, setCurrent] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <div className="app-header">
      <a href="/index">
        <img src={logo} alt="Logo" className="app-logo" />
      </a>
      <div className="menu-wrapper">
        <Menu
          mode="horizontal"
          selectedKeys={[current]}
          onClick={handleClick}
          theme="light"
          className="app-menu"
        >
          {items.map((item) => {
            if (item.children) {
              return (
                <Menu.SubMenu key={item.key} title={item.label}>
                  {item.children[0].children.map((child) => (
                    <Menu.Item key={child.key}>{child.label}</Menu.Item>
                  ))}
                </Menu.SubMenu>
              );
            }
            return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
          })}
        </Menu>
        <div className="menu-burger-wrapper">
          <Button className="menu-burger" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
        </div>
      </div>
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        visible={drawerVisible}
      >
        <Menu
          mode="vertical"
          selectedKeys={[current]}
          onClick={handleClick}
          theme="light"
        >
          {items.map((item) => {
            if (item.children) {
              return (
                <Menu.SubMenu key={item.key} title={item.label}>
                  {item.children[0].children.map((child) => (
                    <Menu.Item key={child.key}>{child.label}</Menu.Item>
                  ))}
                </Menu.SubMenu>
              );
            }
            return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
          })}
        </Menu>
      </Drawer>
    </div>
  );
};

export default App;
