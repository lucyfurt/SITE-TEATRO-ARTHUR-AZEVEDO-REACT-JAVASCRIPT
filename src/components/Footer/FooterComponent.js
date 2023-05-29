import React from 'react';
import { Row, Col , FloatButton} from 'antd';
import { FileTextOutlined, InstagramOutlined, FacebookOutlined, YoutubeOutlined } from '@ant-design/icons';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <Row justify="center">
        <Col xs={8} sm={6} md={4} lg={2}>
          <InstagramOutlined style={{ fontSize: '30px' }} />
        </Col>
        <Col xs={8} sm={6} md={4} lg={2}>
          <FacebookOutlined style={{ fontSize: '30px' }} />
        </Col>
        <Col xs={8} sm={6} md={4} lg={2}>
          <YoutubeOutlined style={{ fontSize: '30px' }} />
        </Col>
      </Row>

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
