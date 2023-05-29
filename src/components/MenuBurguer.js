import React, { useState } from 'react';
import { Menu, Button, Drawer, Row, Col } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';

const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        label: 'Item 1',
        key: 'setting:1',
      },
      {
        label: 'Item 2',
        key: 'setting:2',
      },
      {
        label: 'Item 3',
        key: 'setting:3',
      },
      {
        label: 'Item 4',
        key: 'setting:4',
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
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
