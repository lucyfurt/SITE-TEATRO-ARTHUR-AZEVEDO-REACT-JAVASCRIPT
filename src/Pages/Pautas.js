import React from 'react';
import { Layout, Typography, Button } from 'antd';

const { Content, Header, Footer } = Layout;
const { Title } = Typography;

const Pautas = () => {
  return (
    <Layout>
      <Header style={{ background: '#6d0202', padding: '20px' }}>
        <Title level={3} style={{ color: '#fff', margin: 0 }}>
          <a style={{ color: '#fff' }} href='/'>Teatro Arthur Azevedo</a>
        </Title>
      </Header>
      <Content style={{ padding: '50px' }}>
        <Title level={2}>Pedidos de Pautas</Title>
        <div>
          <p style={{ fontSize: '24px' }}>
            Agradecemos pelo seu interesse em reservar pautas em nosso teatro. Abaixo, você encontrará os três tipos de pautas disponíveis:
          </p>
          <div className="button-container">
            <Button type="primary" shape="round" href='/shows'>
              Shows / Espetáculos
            </Button>
          </div>
          <div className="button-container">
            <Button type="primary" shape="round" href='/fotografias'>
              Fotografias
            </Button>
          </div>
          <div className="button-container">
            <Button type="primary" shape="round" href='/salas-de-danca'>
              Salas de Dança
            </Button>
          </div>
          <p style={{ fontSize: '24px' }}>
            Selecione o tipo de pauta que deseja solicitar e siga as instruções específicas para cada tipo. Caso tenha alguma dúvida ou precise de esclarecimentos adicionais, entre em contato conosco pelo email: pauta.taa@gmail.com
          </p>
        </div>
      </Content>
      <Footer style={{ background: '#6d0202', padding: '20px', textAlign: 'center', color: '#fff' }}>
        Teatro Arthur Azevedo © Todos os direitos reservados 2023
      </Footer>
    </Layout>
  );
}

export default Pautas;
