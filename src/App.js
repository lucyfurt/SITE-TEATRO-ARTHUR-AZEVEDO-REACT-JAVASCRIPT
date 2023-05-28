import { Divider, Layout } from 'antd';
import Menu from './components/Header/Menu.js'
import Carrossel from './components/Header/Carrossel.js'
import './App.css';
import CardNews from './components/Content/CardNews.js';
const { Header, Footer, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  backgroundColor: '#6d0202',
  height: 130,
  paddingInline: 50,
  lineHeight: '64px',

};

const contentStyle = {
  minHeight: 'calc(550vh - 160px)',
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
function App() {
  return (
    <>
      <Layout>
        <Header style={headerStyle}>
          <div>
           <Menu/>
           <Carrossel/>
          </div>          
        </Header>
        
        <Content style={contentStyle}>
          <Divider 
           style={{
            background: 'rgb(242,174,48)',
            borderWidth: 2,
          }}
          orientation="center"
          >
     
       <h1 style={{color: '#fff'}} >Notícias</h1></Divider>
          <CardNews/>
          <Divider
           style={{
            background: 'rgb(242,174,48)',
            borderWidth: 2,
          }}
          orientation="center"
          ><h1 style={{color: '#fff'}}>Eventos</h1></Divider>

          <Divider
           style={{
            background: 'rgb(242,174,48)',
            borderWidth: 2,
          }}
          orientation="center"
          ><h1 style={{color: '#fff'}}>Visitação</h1></Divider>
         
          <Divider
           style={{
            background: 'rgb(242,174,48)',
            borderWidth: 2,
          }}
          orientation="center"
          ><h1 style={{color: '#fff'}}>Bilheteria</h1></Divider>
          

          
        
        </Content>
        <Footer style={footerStyle} >
        
        </Footer>
      </Layout>
    </>
  );
}

export default App;
