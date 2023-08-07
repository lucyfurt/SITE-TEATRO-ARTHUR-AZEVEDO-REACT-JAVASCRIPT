import React from 'react';
import MenuBurguer from '../components/Header/MenuBurguer.js';
import { Layout, Button, Divider, Row, Col } from 'antd';

import './css/FormPauta.css';

const { Content } = Layout;

function FormPauta() {
  return (
    <Layout>
      <MenuBurguer />
      <Content>
        <Divider orientation='left'>
          <h2>Proposta de pauta</h2>
        </Divider>
        <div>
          <Row gutter={[16, 16]} justify={'center'}>
            <Col>
              <Button type='primary' href='/tecnico'>
                Informações Técnicas
              </Button>
            </Col>
            <Col>
              <Button type='primary' >
                Edital/Normas
              </Button>
            </Col>
          </Row>
        </div>
        <Divider orientation='left'>
          <h2>Dados do proponente:</h2>
        </Divider>
        <p>Sistema indisponível no momento...</p>
      </Content>

    </Layout>

  )
}
export default FormPauta;