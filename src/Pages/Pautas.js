import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Layout, Typography, Button, Steps } from 'antd';
import './ContactForm.css';

const { Content, Header, Footer } = Layout;
const { Title } = Typography;
const { Step } = Steps;

function ContactForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [state, handleSubmit] = useForm("moqoaddy");

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

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
          <p>
            Agradecemos pelo seu interesse em reservar pautas em nosso teatro. Para obter todas as informações detalhadas e requisitos necessários, solicitamos que você baixe o edital para pedidos de pautas no botão a seguir:
          </p>
          <Button type="primary" shape="round">
            Inscrições encerradas! - Edital
          </Button>
          <p>
            Fique atento(a) ao prazo estabelecido no edital para a entrega do formulário completo. Qualquer dúvida ou esclarecimento adicional, por favor, entre em contato conosco pelo email: pauta.taa@gmail.com
            Após ler atentamente o edital e se familiarizar com os termos e condições, preencha o formulário abaixo com as informações solicitadas:
          </p>
        </div>
        <Steps current={currentStep}>
          <Step title="Informações Pessoais" />
          <Step title="Detalhes do Evento" />
        </Steps>
        {currentStep === 0 && (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome:</label>
              <input id="nome" type="text" name="nome" />
              <ValidationError prefix="Nome" field="nome" errors={state.errors} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input id="email" type="email" name="email" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="form-group">
              <label htmlFor="celular">Celular com DDD:</label>
              <input id="celular" type="text" name="celular" />
              <ValidationError
                prefix="Celular com DDD"
                field="celular"
                errors={state.errors}
              />
            </div>
            <Button type="primary" onClick={nextStep}>
              Próximo
            </Button>
          </form>
        )}
        {currentStep === 1 && (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="data">Data início:</label>
              <input id="data" type="date" name="data_inicio" />
              <ValidationError
                prefix="Data início"
                field="data_inicio"
                errors={state.errors}
              />
            </div>
            <div className="form-group">
              <label htmlFor="data">Data fim:</label>
              <input id="data" type="date" name="data_fim" />
              <ValidationError
                prefix="Data fim"
                field="data_fim"
                errors={state.errors}
              />
            </div>
            <div className="form-group">
              <label htmlFor="evento">Nome do evento:</label>
              <input id="evento" type="text" name="nome_evento" />
              <ValidationError
                prefix="Nome do evento"
                field="nome_evento"
                errors={state.errors}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ficha">Ficha técnica e sinopse:</label>
              <textarea id="ficha" name="ficha_sinopse" />
              <ValidationError
                prefix="Ficha técnica e sinopse"
                field="ficha_sinopse"
                errors={state.errors}
              />
            </div>
            <div className="form-group">
              <label htmlFor="empresa">Empresa/Produtora:</label>
              <input id="empresa" type="text" name="empresa" />
              <ValidationError prefix="Empresa" field="empresa" errors={state.errors} />
            </div>
            <Button onClick={prevStep}>Anterior</Button>
            <button className="submit-button" type="submit" disabled={state.submitting}>
              Enviar
            </button>
          </form>
        )}
      </Content>
      <Footer style={{ background: '#6d0202', padding: '20px', textAlign: 'center', color: '#fff' }}>
        Teatro Arthur Azevedo © Todos os direitos reservados 2023
      </Footer>
    </Layout>
  );
}

export default ContactForm;
