import React from 'react';
import { Row, Col, BackTop, FloatButton } from 'antd';
import { InstagramOutlined, FacebookOutlined, YoutubeOutlined, QuestionCircleOutlined } from '@ant-design/icons';
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
        <Row justify="center" gutter={[6, 6]}>
          <Col xs={24} sm={12} md={6}>
          <a href="https://ibb.co/YRn6kJS"><img src="https://i.ibb.co/vwybPfW/Asset-4-2x.png" alt="Asset-4-2x" border="0" style={{width:'200px'}}/></a>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <img src="https://i.ibb.co/pQyyTs6/Asset-1-2x.png" alt="SECMA" className="secma-logo" />
          </Col>

        </Row>
        <br /><br />

        <div className="copyright" >
          Todos os direitos reservados - Teatro Arthur Azevedo {new Date().getFullYear()}
        </div>
        <div className={getSocialLinksClassName()} 
        style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
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
        <BackTop />
        <FloatButton
      icon={<QuestionCircleOutlined />}
      type="default"
      style={{
        right: 150,
      }}
    />
      </div>
    </footer>
  );
};

export default FooterComponent;
