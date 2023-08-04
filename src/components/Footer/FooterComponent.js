import React from 'react';
import { Row, Col, BackTop, Layout } from 'antd';
import { InstagramOutlined, FacebookOutlined, YoutubeOutlined } from '@ant-design/icons';
import '../Footer/css/FooterComponent.css';
const { Footer, Content } = Layout;

function FooterComponent() {
  return (
    <>
      <Layout>
        <Content>
          <Footer style={{ backgroundColor: '#861A16' }}>
            <div className="text-center">
              <Row gutter={[8, 8]}>
                <Col span={8}>
                  <img src="https://i.ibb.co/vwybPfW/Asset-4-2x.png" alt="logo-taa" border="0" style={{ width: '50px', marginRight: '10px' }} />
                  <img src="https://i.ibb.co/pQyyTs6/Asset-1-2x.png" alt="secma" style={{ width: '50px', marginRight: '10px' }} />
                </Col>
                <Col span={8}>
                  <div>
                    <p style={{ color: 'white' }}>
                      R. do Sol, S/n - Centro, São Luís - MA, 65010-120
                      Todos os direitos reservados - Teatro Arthur Azevedo
                    </p>                   
                  </div>
                </Col>
                <Col span={8}>
                  <div>
                    <a href="https://www.instagram.com/teatroarthurazevedooficial/" target="_blank" rel="noreferrer">
                      <InstagramOutlined style={{ fontSize: '30px', color: 'white', marginRight: '10px' }} />
                    </a>
                    <a href="https://www.facebook.com/teatroarthurazevedooficial/?locale=pt_BR" target="_blank" rel="noreferrer">
                      <FacebookOutlined style={{ fontSize: '30px', color: 'white', marginRight: '10px' }} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCDq1f20ufxLFjUdz5eqSEtg" target="_blank" rel="noreferrer">
                      <YoutubeOutlined style={{ fontSize: '30px', color: 'white', marginRight: '10px' }} />
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
            <BackTop />
          </Footer>
        </Content>
      </Layout>
    </>
  );
}

export default FooterComponent;
