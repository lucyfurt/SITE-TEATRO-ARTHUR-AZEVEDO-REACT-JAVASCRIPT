import React from 'react';
import { FloatButton, Row, Col, Divider } from 'antd';
import { FileTextOutlined , InstagramOutlined, FacebookOutlined, YoutubeOutlined} from '@ant-design/icons';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src='https://i.ibb.co/vmpv5sD/logo206.png' style={{ width: '140px', height:'70px' }}/>
        <img src="https://i.ibb.co/C2HcsN6/SECMA.png" style={{ width: '220px', height:'65px' }} />
      </div>
      <Divider/>
<Row style={{justifyContent: 'center'}} >
<Col xs={8} sm={6} md={4} lg={2}>
          <a href='https://www.instagram.com/teatroarthurazevedooficial/'
          target='_blank' rel="noreferrer" 
          >
          <InstagramOutlined style={{ fontSize: '30px' }} />
          </a>
          
        </Col>
        <Col xs={8} sm={6} md={4} lg={2}>
      
        <a href='  https://www.facebook.com/teatroarthurazevedooficial/?locale=pt_BR'
          target='_blank' rel="noreferrer" 
          >
             <FacebookOutlined style={{ fontSize: '30px' }} />
          </a>
         
        </Col>
        <Col xs={8} sm={6} md={4} lg={2}>
        <a href='  https://www.youtube.com/channel/UCDq1f20ufxLFjUdz5eqSEtg'
          target='_blank' rel="noreferrer" 
          >
             <YoutubeOutlined style={{ fontSize: '30px' }} />
        </a>
         
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
