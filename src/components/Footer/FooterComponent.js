import React from 'react';
import { FloatButton, Row, Col, Divider } from 'antd';
import { FileTextOutlined, InstagramOutlined, FacebookOutlined, YoutubeOutlined } from '@ant-design/icons';
import './FooterComponent.css'; // Importar o arquivo CSS com as modificações

const FooterComponent = () => {
  return (
    <footer className="footer">
      <Row justify="space-between" align="middle" gutter={[8, 8]}>
        <Col>
          <img src='https://i.ibb.co/vmpv5sD/logo206.png' className="img-fluid" style={{ maxWidth: '140px', height: 'auto' }}/>
        </Col>
        <Col>
          <img src="https://i.ibb.co/C2HcsN6/SECMA.png" className="img-fluid" style={{ maxWidth: '220px', height: 'auto' }} />
        </Col>
        <Col>
          <div className="social-links">
            <a href='https://www.instagram.com/teatroarthurazevedooficial/' target='_blank' rel="noreferrer">
              <InstagramOutlined style={{ fontSize: '30px' }} />
            </a>
            <a href='https://www.facebook.com/teatroarthurazevedooficial/?locale=pt_BR' target='_blank' rel="noreferrer">
              <FacebookOutlined style={{ fontSize: '30px' }} />
            </a>
            <a href='https://www.youtube.com/channel/UCDq1f20ufxLFjUdz5eqSEtg' target='_blank' rel="noreferrer">
              <YoutubeOutlined style={{ fontSize: '30px' }} />
            </a>
          </div>
        </Col>
      </Row>
      <Divider/>
      <p>Todos os direitos reservados - Teatro Arthur Azevedo 2023</p>
      <FloatButton
        icon={<FileTextOutlined />}
        shape="circle"
        style={{
          right: 10
        }}
        href="/pauta"
        tooltip={<div>Pautas e locações</div>}
      />
    </footer>
  );
};

export default FooterComponent;
