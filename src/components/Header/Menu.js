import React, { useState, useEffect } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './Menu.css';
import logo from '../../assets/logo.png';

const menuItems = [
  {
    label: 'O Teatro',
    key: 'SubMenu',
    items: [
      {
        label: 'Institucional',
        key: 'setting:1',
        link: '/institucional',
      },
      {
        label: 'História',
        key: 'setting:2',
        link: '/historia',
      },
      {
        label: 'Informações técnicas',
        key: 'setting:3',
        link: '/info',
      },
    ],
  },
  {
    label: 'Shows/Espetáculos',
    key: 'shows',
    items: [
      {
        label: 'Mensal',
        key: 'setting:4',
        link: '/eventos',
      },
    ],
  },
  {
    label: 'Pautas',
    key: 'pauta',
    items: [
      {
        label: 'Reserva de pautas',
        key: 'setting:5',
        link: '/pauta',
      },
    ],
  },
  {
    label: 'Núcleo de Memória e Pesquisa',
    key: 'nmp',
    items: [
      {
        label: 'Biblioteca Arão Paranaguá',
        key: 'setting:6',
        link: '/biblioteca',
      },
    ],
  },
];

const App = () => {
  const [current, setCurrent] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const renderMenuItems = (items) => {
    return items.map((item) => {
      if (item.items) {
        return (
          <Menu.SubMenu key={item.key} title={item.label}>
            {renderMenuItems(item.items)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key}>
          <a href={item.link}>{item.label}</a>
        </Menu.Item>
      );
    });
  };

  return (
    <div className="app-header">
      <a href="/index">
        <img src={logo} alt="Logo" className="app-logo" />
      </a>
      <div className="menu-wrapper">
        <Menu
          mode={isMobile ? 'vertical' : 'horizontal'}
          selectedKeys={[current]}
          onClick={handleClick}
          theme="light"
          className="app-menu"
        >
          {renderMenuItems(menuItems)}
        </Menu>
        {isMobile && (
          <div className="menu-burger">
            <Button onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </div>
        )}
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
          {renderMenuItems(menuItems)}
        </Menu>
      </Drawer>
    </div>
  );
};

export default App;
