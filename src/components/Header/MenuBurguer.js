import React, { useState } from 'react';
import { Menu, Button, Drawer, Row, Col } from 'antd';
import {  MenuOutlined, CloseOutlined } from '@ant-design/icons';

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

const MenuBurger = () => {
  const [current, setCurrent] = useState('mail');
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <Row justify="end">
      <Col>
        <Button className="menu-toggle" icon={<MenuOutlined />} onClick={toggleDrawer} />
        <Drawer
          placement="right"
          closable={false}
          onClose={toggleDrawer}
          visible={drawerVisible}
          bodyStyle={{ padding: 0 }}
        >
          <div style={{ padding: '16px' }}>
            <Row justify="space-between" align="middle" style={{ marginBottom: '16px' }}>
              <Col span={6}>
                <img src="https://i.ibb.co/kJhYxVW/logo.png" alt="Logo" style={{ width: '60px' }} />
              </Col>
              <Col>
                <Button type="text" icon={<CloseOutlined />} onClick={toggleDrawer} />
              </Col>
            </Row>
            <Menu
              onClick={handleClick}
              selectedKeys={[current]}
              mode="vertical"
              theme="light"
              style={{ width: 256 }}
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
          </div>
        </Drawer>
      </Col>
    </Row>
  );
};

export default MenuBurger;
