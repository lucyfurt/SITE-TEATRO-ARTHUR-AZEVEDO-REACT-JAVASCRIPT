import React from 'react';
import { useForm } from '@formspree/react';
import { Layout, Typography, Button } from 'antd';
import './ContactForm.css';

const { Content, Header, Footer } = Layout;
const { Title } = Typography;

const Pautas = () => {
  const [state, handleSubmit] = useForm("moqoaddy");

  if (state.succeeded) {
    return <p>Formulário enviado com sucesso!</p>;
  }
  return (
    <Layout>
      <Header style={{ background: '#6d0202', padding: '20px' }}>
        <Title level={3} style={{ color: '#fff', margin: 0 }}>
          <a style={{ color: '#fff' }} href='/'>Teatro Arthur Azevedo</a>
        </Title>
      </Header>
      <Content style={{ padding: '50px' }}>
        <Title level={2}>Pedido de Pautas</Title>
        <div>
          <p style={{ fontSize:'24px' }}>
            Agradecemos pelo seu interesse em reservar pautas em nosso teatro. Para obter todas as informações detalhadas e requisitos necessários, solicitamos que você baixe o edital para pedidos de pautas no botão a seguir:
          </p>
          <div className="button-container">
            <Button type="primary" shape="round" disabled>
              Edital
            </Button>
          </div>
          <div className="button-container">
            <Button type="primary" shape="round">
              Cartilha...
            </Button>
          </div>
          <div className="button-container">
            <Button type="primary" shape="round" href='/inscricoes' disabled>
              Inscrições
            </Button>
          </div>
          <p style={{ fontSize:'24px' }}>
            Fique atento(a) ao prazo estabelecido no edital para a entrega do formulário completo. Qualquer dúvida ou esclarecimento adicional, por favor, entre em contato conosco pelo email: pauta.taa@gmail.com
            Após ler atentamente o edital e se familiarizar com os termos e condições, preencha o formulário abaixo com as informações solicitadas:
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
