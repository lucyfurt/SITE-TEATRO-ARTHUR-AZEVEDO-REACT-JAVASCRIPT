import { Divider, Layout } from 'antd';
import Menu from './components/Header/Menu.js'
import Carrossel from './components/Header/Carrossel.js'
import './App.css';
import CardNews from './components/Content/CardNews.js';
import FullEvento from './components/Content/FullEvento.js';
import Visitacao from './components/Content/Visitacao.js';
import Bilheteria from './components/Content/Bilheteria.js';
import FooterComponent from './components/Footer/FooterComponent.js';
const { Header, Footer, Content } = Layout;
const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.9322008938943!2d-44.3050561259277!3d-2.529032438245369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68ee5fb3ba277%3A0x3f66c06359ed1621!2sTeatro%20Arthur%20Azevedo!5e0!3m2!1spt-BR!2sbr!4v1684798082286!5m2!1spt-BR!2sbr" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';


const contentStyle = {
  minHeight: 'calc(600vh - 160px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#6d0202',
};
function Iframe(props) {
  return (<div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} />);
}
function App() {
  return (
    <>
      <Layout>
        
     
          <div>
            <Menu />
          </div>
       
        <Carrossel />
        <Content style={contentStyle}>
          <Divider
            style={{
              background: 'rgb(242,174,48)',
              borderWidth: 2,
            }}
            orientation="center"
          >
            <h1 style={{ color: '#fff' }} >Notícias</h1></Divider>
          <CardNews />
          <Divider
            style={{
              background: 'rgb(242,174,48)',
              borderWidth: 2,
            }}
            orientation="center"
          ><h1 style={{ color: '#fff' }}>Eventos</h1></Divider>
          <FullEvento />
          <Divider
            style={{
              background: 'rgb(242,174,48)',
              borderWidth: 2,
            }}
            orientation="center"
          ><h1 style={{ color: '#fff' }}>Visitação</h1></Divider>
          <Visitacao />
          <Divider
            style={{
              background: 'rgb(242,174,48)',
              borderWidth: 2,
            }}
            orientation="center"
          ><h1 style={{ color: '#fff' }}>Bilheteria</h1></Divider>
          <Bilheteria />
          <Iframe iframe={iframe} />
        </Content>
        <Footer style={footerStyle} >
          <FooterComponent />
        </Footer>
      </Layout>
    </>
  );
}

export default App;
