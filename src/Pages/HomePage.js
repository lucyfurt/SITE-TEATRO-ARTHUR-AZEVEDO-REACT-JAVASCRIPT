import React from 'react';
import { Divider, Layout } from 'antd';
import Carrossel from '../components/Header/Carrossel'
import CardNews from '../components/Content/CardNews.js';
import Programacao from '../components/Content/Programacao.js';
import Visitacao from '../components/Content/Visitacao.js';
import Bilheteria from '../components/Content/Bilheteria.js';
import Frame from '../components/Content/Frame.js';
import FooterComponent from '../components/Footer/FooterComponent.js';
import MenuAll from '../components/Header/MenuAll.js';

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
  lineHeight: '64px',

};
function HomePage() {
  return (
    <Layout>
      <Header style={headerStyle}>
        <MenuAll />
      </Header>
      <Carrossel />
      <Content style={contentStyle}>
        <Divider style={{ background: 'rgb(242, 174, 48)', borderWidth: 2, lineHeight: '0', fontSize: '14' }} orientation="center">
          <h1 style={{ color: '#fff' }}>Próximos Eventos</h1>
        </Divider>
        <Programacao />
        <Divider style={{ background: 'rgb(242, 174, 48)', borderWidth: 2, lineHeight: '0', fontSize: '14' }} orientation="center">
          <h1 style={{ color: '#fff' }}>Notícias</h1>
        </Divider>
        <CardNews />
        <Divider style={{ background: 'rgb(242, 174, 48)', borderWidth: 2, lineHeight: '0', fontSize: '14' }} orientation="center">
          <h1 style={{ color: '#fff' }}>Visitação</h1>
        </Divider>
        <Visitacao />
        <Divider style={{ background: 'rgb(242, 174, 48)', borderWidth: 2, lineHeight: '0', fontSize: '14' }} orientation="center">
          <h1 style={{ color: '#fff' }}>Bilheteria</h1>
        </Divider>
        <Bilheteria />
        <Frame />
      </Content>
      <Footer style={footerStyle}>
        <FooterComponent />
      </Footer>
    </Layout >
  );
}
export default HomePage;
