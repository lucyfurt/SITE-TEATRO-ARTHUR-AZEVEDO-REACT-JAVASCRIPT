import React from 'react';
import { Layout, Divider, Row, Col, Button } from 'antd';
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
            <Col span={24} style={{ textAlign: 'center' }}>
              <img
                className='image'
                src="https://i.ibb.co/yqz8DqH/0001.png"
                alt="Bailarinas"
              />
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
              <Button type='primary' disabled={true}>
                Solicitação de pauta para Espetáculos/Shows
              </Button>
            </Col>
            <Col span={24} style={{ textAlign: 'center', padding:'20px' }}>
              <Button type='primary' disabled={false} href='/inscricoes'>
                Solicitação de pautas para Fotografias
              </Button>
            </Col>
          </Row>
        </Content>
        <FooterComponent />
      </Layout>
    </>
  );
}

export default Historia;
