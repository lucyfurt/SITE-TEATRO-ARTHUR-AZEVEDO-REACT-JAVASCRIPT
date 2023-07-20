import React from 'react';
import { Divider, Layout } from 'antd';
import Carrossel from '../components/Header/Carrossel.js';
import CardNews from '../components/Content/CardNews.js';
import Programacao from '../components/Content/ProgramacaoHome.js';
import Visitacao from '../components/Content/Visitacao.js';
import Bilheteria from '../components/Content/Bilheteria.js';
import FooterComponent from '../components/Footer/FooterComponent.js';
import HistoriaHome from '../components/Content/HistoriaHome.js';
import MenuHome from '../components/Header/MenuHome.js';
import Pautas from '../components/Content/PautaHome.js';
import './css/HomePage.css'
const { Header, Footer, Content } = Layout;

function HomePage() {
  return (
    <Layout>
      <Header className='headerStyle'>
        <MenuHome />
      </Header>
      <Carrossel />
      <Content className='contentStyle'>
        <Divider orientation="left">
          <h1>Próximos Eventos</h1>
        </Divider>
        <Programacao />
        <Divider orientation="left">
          <h1>Especial 206 anos</h1>
        </Divider>
        <HistoriaHome />
        <Divider orientation="left">
          <h1>Notícias</h1>
        </Divider>
        <CardNews />
        <Divider orientation="left">
          <h1>Pautas</h1>
        </Divider>
        <Pautas />
        <Divider orientation="left">
          <h1>Visitação</h1>
        </Divider>
        <Visitacao />
        <Divider orientation="left">
          <h1>Bilheteria</h1>
        </Divider>
        <Bilheteria />
      </Content>
      <Footer className='footerStyle'>
        <FooterComponent />
      </Footer>
    </Layout>
  )
}
export default HomePage;
