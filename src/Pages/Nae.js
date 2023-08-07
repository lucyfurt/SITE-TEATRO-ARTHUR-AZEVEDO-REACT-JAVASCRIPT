import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import { Layout, Tabs, Card, Divider, } from 'antd';
import MenuBurguer from '../components/Header/MenuBurguer.js';
import FooterComponent from '../components/Footer/FooterComponent';
const { TabPane } = Tabs;
const { Meta } = Card;
const { Content } = Layout;

function Nae() {
  return (
    <>
      <MenuBurguer />
      <Layout>
        <Divider orientation="left">
          <h1>Núcleo Arte Educação</h1>
        </Divider>
        <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Carousel style={{ width: '50%', height: 'auto' }}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/8Ppnk0Q/Teatro-Arthur-Azevedo.jpg"
                alt="1"
              />
            </Carousel.Item>
          </Carousel>
          <Tabs style={{ width: '50%', padding:'30px' }}>
            <TabPane tab="Sobre" key="1">
              <Card>
                <Meta
                  description="Em construção..." />
              </Card>
            </TabPane>
            <TabPane tab="Dança" key="2">
              <Card>
                <Meta
                  description="Em construção..." />
              </Card>
            </TabPane>
            <TabPane tab="Música" key="3">
              <Card>
                <Meta
                  description="Em construção..." />
              </Card>
            </TabPane>
            <TabPane tab="Teatro" key="4">
              <Card>
                <Meta
                  description="Em construção..." />
              </Card>
            </TabPane>
          </Tabs>
        </Content >
        <FooterComponent />
      </Layout >
    </>
  );
}
export default Nae;
