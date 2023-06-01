import React from 'react';
import { Row, Col, BackTop } from 'antd';
import { InstagramOutlined, FacebookOutlined, YoutubeOutlined } from '@ant-design/icons';
import './FooterComponent.css';

const FooterComponent = () => {
  const isSmallScreen = () => {
    return window.innerWidth <= 768;
  };

  const getSocialLinksClassName = () => {
    return isSmallScreen() ? 'social-links small-screen' : 'social-links';
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <Row justify="center" gutter={[8, 8]}>
          <Col xs={24} sm={12} md={6}>
            <img src="https://i.ibb.co/vwybPfW/Asset-4-2x.png" alt="Logo" className="logo" />
          </Col>
          <Col xs={24} sm={12} md={6}>
            <img src="https://i.ibb.co/pQyyTs6/Asset-1-2x.png" alt="SECMA" className="secma-logo" />
          </Col>
          <Col xs={24} md={12}>
            <div className={getSocialLinksClassName()}>
              <a href="https://www.instagram.com/teatroarthurazevedooficial/" target="_blank" rel="noreferrer">
                <InstagramOutlined style={{ fontSize: '30px' }} />
              </a>
              <a href="https://www.facebook.com/teatroarthurazevedooficial/?locale=pt_BR" target="_blank" rel="noreferrer">
                <FacebookOutlined style={{ fontSize: '30px' }} />
              </a>
              <a href="https://www.youtube.com/channel/UCDq1f20ufxLFjUdz5eqSEtg" target="_blank" rel="noreferrer">
                <YoutubeOutlined style={{ fontSize: '30px' }} />
              </a>
            </div>
          </Col>
        </Row>
        <p className="copyright">
          Todos os direitos reservados - Teatro Arthur Azevedo {new Date().getFullYear()}
        </p>
        <BackTop />
      </div>
    </footer>
  );
};

export default FooterComponent;
