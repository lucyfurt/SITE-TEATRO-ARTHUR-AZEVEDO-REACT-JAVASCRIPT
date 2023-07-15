import React from 'react';
import { useForm } from '@formspree/react';
import { Layout, Typography, Button, Form, Input, DatePicker, Divider } from 'antd';
import './css/FormPauta.css';

const { Content, Header, Footer } = Layout;
const { Title } = Typography;

const FormPauta = () => {
  const [state, handleSubmit] = useForm("moqoaddy");
  if (state.succeeded) {
    return <p>Formulário enviado com sucesso!</p>;
  }
  return (
    <Layout>
      <Header>
        <Title level={3}>
          <a href='/'>Teatro Arthur Azevedo</a>
        </Title>
      </Header>
      <Content>
        <Title level={2}>Pedido de pautas</Title>
        <Divider />
        <div>
          <Button>Edital</Button>
          <Button>Normas </Button>
        </div>
        <Divider />
        <h1>Formulário de inscrição:</h1>
        <Form className="contact-form" onSubmit={handleSubmit}>
          <Form.Item label="Nome" name="nome" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Celular com DDD" name="celular" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Data início" name="data_inicio" rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item>
          <Form.Item label="Data fim" name="data_fim" rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item>
          <Form.Item label="Nome do evento" name="nome_evento" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Ficha técnica e sinopse" name="ficha_sinopse" rules={[{ required: true }]}>
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Empresa/Produtora" name="empresa" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button className="submit-button" type="primary" htmlType="submit" disabled={state.submitting}>
              Enviar
            </Button>
          </Form.Item>
          {state.errors.length > 0 && (
            <div className="error-message">
              {state.errors.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}
        </Form>
      </Content>
      <Footer>
        Teatro Arthur Azevedo © Todos os direitos reservados 2023
      </Footer>
    </Layout>
  )
}
export default FormPauta;