import React from 'react';
import { useForm } from '@formspree/react';
import { Layout, Button, Form, Input, DatePicker, Divider } from 'antd';
import MenuHome from '../components/Header/MenuHome';
import FooterComponent from '../components/Footer/FooterComponent';
import './css/FormPauta.css';

const { Content } = Layout;

const FormPauta = () => {
  const [state, handleSubmit] = useForm("moqoaddy");
  if (state.succeeded) {
    return <p>Formulário enviado com sucesso!</p>;
  }
  return (
    <Layout>
      <MenuHome />
      <Content>
        <Divider orientation='left'>
          <h2>Proposta de pauta</h2>
        </Divider>
        <div>
        
                <button className="big-rectangle-button">
                  Informações Técnicas
                </button>
            
                <button className="big-rectangle-button">
                  Edital/Normas
                </button>
              
        </div>
        <Divider orientation='left'>
          <h2>Formulário</h2>
        </Divider>
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
      <FooterComponent />
    </Layout>
  )
}
export default FormPauta;