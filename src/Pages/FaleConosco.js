import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Layout, Typography } from 'antd';
import MenuBurguer from '../components/Header/MenuBurguer.js';
import FooterComponent from '../components/Footer/FooterComponent';

const { Content } = Layout;
const { Title } = Typography;

function FaleConosco() {
  const [state, handleSubmit] = useForm("moqoaddy");
  if (state.succeeded) {
    return <p>Obrigado por nos contatar! Nós retornaremos para você em breve.</p>;
  }
  return (
    <Layout>
      <MenuBurguer />
      <Content>
        <Title level={2}>Fale Conosco</Title>
        <div>
          <p>
            Obrigado por seu interesse em nos contactar. Por favor, preencha o formulário abaixo com seus dados e mensagem, que retornaremos o mais breve possível.          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input id="name" type="text" name="name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <button className="submit-button" type="submit" disabled={state.submitting}>
            Enviar
          </button>
        </form>
      </Content>
      <FooterComponent />
    </Layout>
  );
}
export default FaleConosco;
