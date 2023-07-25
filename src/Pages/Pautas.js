import React from 'react';
import { Layout, Divider, Row, Col } from 'antd';
import MenuHome from '../components/Header/MenuHome';
import FooterComponent from '../components/Footer/FooterComponent';
import '../Pages/css/pauta.css';
const { Content } = Layout;

function Historia() {
  return (
    <>
      <MenuHome />
      <Layout>
        <Divider orientation="left">
          <h1>Pautas</h1>
        </Divider>
        <Content>
          <div className="image-container">
            <img
              src="https://i.ibb.co/gDx0FSh/ballerinas-1376250-1280.jpg"
              width={'400px'}
              alt="Ballerinas"
            />
          </div>
          <div className="buttons-container">
            <Row gutter={[16, 16]}>
              <Col>
                <button className="big-rectangle-button">
                  Solicitação de pauta Espetáculos/Shows
                </button>
              </Col>
              <Col>
                <button className="big-rectangle-button">
                  Solicitação de pauta Fotografias
                </button>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col>
                <button className="big-rectangle-button">
                  Informações Técnicas
                </button>
              </Col>
              <Col>
                <button className="big-rectangle-button">
                  Edital/Normas
                </button>
              </Col>
            </Row>
          </div>
        </Content>
        <FooterComponent />
      </Layout>
    </>
  );
}

export default Historia;
