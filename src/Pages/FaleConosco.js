import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Layout, Typography, Button } from 'antd';

const { Content, Header, Footer } = Layout;
const { Title } = Typography;

function ContactUsForm() {
  const [state, handleSubmit] = useForm("moqoaddy");

  if (state.succeeded) {
    return <p>Obrigado por nos contatar! Nós retornaremos para você em breve.</p>;
  }

  return (
    <Layout>
      <Header style={{ background: '#6d0202', padding: '20px' }}>
        <Title level={3} style={{ color: '#fff', margin: 0 }}>
          <a style={{ color: '#fff' }} href='/'>Teatro Arthur Azevedo</a>
        </Title>
      </Header>
      <Content style={{ padding: '50px' }}>
        <Title level={2}>Fale Conosco</Title>
        <div>
          <p>
          Obrigado por seu interesse em nos contactar. Por favor, preencha o formulário abaixo com seus dados e mensagem, que retornaremos o mais breve possível.          </p>
        </div>
    
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" name="name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          
          <button className="submit-button" type="submit" disabled={state.submitting}>
            Send Message
          </button>
        </form>
      </Content>
      <Footer style={{ background: '#6d0202', padding: '20px', textAlign: 'center', color: '#fff' }}>
        Teatro Arthur Azevedo © All rights reserved 2023
      </Footer>
    </Layout>
  );
}

export default ContactUsForm;
