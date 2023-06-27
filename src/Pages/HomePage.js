import React from 'react';
import { Divider, Layout } from 'antd';
import Carrossel from '../components/Header/Carrossel';
import CardNews from '../components/Content/CardNews.js';
import Programacao from '../components/Content/Programacao.js';
import Visitacao from '../components/Content/Visitacao.js';
import Bilheteria from '../components/Content/Bilheteria.js';
import Frame from '../components/Content/Frame.js';
import FooterComponent from '../components/Footer/FooterComponent.js';
import HistoriaHome from '../components/Content/HistoriaHome';
import MenuHamg from '../components/Header/MenuHamg';

const { Header, Footer, Content } = Layout;

const contentStyle = {
  minHeight: 'calc(100vh - 160px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
};

const footerStyle = {
  textAlign: 'center',
  color: 'black',
  backgroundColor: '#730c02',
};

const headerStyle = {
  backgroundColor: '#6d0202',
  lineHeight: '100px',
};

const HomePage = () => {
  return (
    <Layout>
      <Header style={headerStyle}>
        <MenuHamg />
      </Header>
      <Carrossel />
      <Content style={contentStyle}>
        <Divider orientation="left">
          <h1 style={{ color: 'black', fontSize: '36px' }}>Próximos Eventos</h1>
        </Divider>
        <Programacao />
        <HistoriaHome />
        <Divider orientation="left">
          <h1 style={{ color: 'black', fontSize: '36px' }}>Notícias</h1>
        </Divider>
        <CardNews />
        <Divider orientation="left">
          <h1 style={{ color: 'black', fontSize: '36px' }}>Visitação</h1>
        </Divider>
        <Visitacao />
        <Divider orientation="left">
          <h1 style={{ color: 'black', fontSize: '36px' }}>Bilheteria</h1>
        </Divider>
        <Bilheteria />      
      </Content>
      <Footer style={footerStyle}>
        <FooterComponent />
      </Footer>
      <style jsx>{`
        @media (max-width: 768px) {
          /* Styles for mobile devices */
          .content {
            padding: 10px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default HomePage;
