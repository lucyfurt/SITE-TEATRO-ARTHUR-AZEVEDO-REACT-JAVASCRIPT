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
            <p>As solicitações de pauta são feitas exclusivamente mediante o preenchimento do formulário, enquanto o mesmo estiver disponível.</p>
            <Col>
              <img
                className='image'
                src="https://i.ibb.co/yqz8DqH/0001.png"
                alt="Bailarinas"
              /></Col>
            <Col>
              <button className="big-rectangle-button" disabled='false'>
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
