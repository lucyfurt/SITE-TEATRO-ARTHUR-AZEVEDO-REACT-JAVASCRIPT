import React from 'react';
import { Layout, Divider, Row, Col } from 'antd';
import MenuBurguer from '../components/Header/MenuBurguer.js';
import FooterComponent from '../components/Footer/FooterComponent';
import '../Pages/css/pauta.css';
const { Content } = Layout;

function Historia() {
  return (
    <>
      <MenuBurguer />
      <Layout>
        <Divider orientation="left">
          <h1>Pautas</h1>
        </Divider>
        <Content>
          <Row gutter={[16, 16]} justify={'center'}>
            <Col>
              <img
                src="https://i.ibb.co/gDx0FSh/ballerinas-1376250-1280.jpg"
                width={'400px'}
                alt="Ballerinas"
              /></Col>
            <Col>
              <button className="big-rectangle-button">
                <a href='/inscricoes'>
                  Solicitação de pauta Espetáculos/Shows
                </a>

              </button>
            </Col>
            <Col>
              <button className="big-rectangle-button">
                Solicitação de pauta Fotografias
              </button>
            </Col>
          </Row>


        </Content>
        <FooterComponent />
      </Layout>
    </>
  );
}

export default Historia;
