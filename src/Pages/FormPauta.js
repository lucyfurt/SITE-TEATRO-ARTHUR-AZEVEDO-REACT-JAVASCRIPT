import React from 'react';
import MenuBurguer from '../components/Header/MenuBurguer.js';
import FooterComponent from '../components/Footer/FooterComponent';
import { useForm } from '@formspree/react';
import { Layout, Button, Form, Input, Divider, Row, Col, Radio, Checkbox } from 'antd';

import './css/FormPauta.css';

const { Content } = Layout;

function FormPauta() {
  const [state, handleSubmit] = useForm("moqoaddy");
  if (state.succeeded) {
    return <p>Formulário enviado com sucesso!</p>;
  }
  return (
    <Layout>
      <MenuBurguer />
      <Content>
        <Divider orientation='left'>
          <h2>Proposta de pauta</h2>
        </Divider>
        <div>
          <Row gutter={[16, 16]} justify={'center'}>
            <Col>
              <Button type='primary' href='/tecnico'>
                Informações Técnicas
              </Button>
            </Col>
            <Col>
              <Button type='primary' >
                Edital/Normas
              </Button>
            </Col>
          </Row>
        </div>
        <Divider orientation='left'>
          <h2>Dados do proponente:</h2>
        </Divider>
        <Form className="contact-form" onSubmit={handleSubmit}>
          <Form.Item label="Razão Social/Nome fantasia" name="razaosocial" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="CNPJ" name="cnpj" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Nome completo do responsável legal" name="responsavellegal" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="RG do porponente ou responsável legal pela proposta" name="rgproponente" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="CPF do porponente ou responsável legal pela proposta" name="cpfproponente" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Endereço do porponente ou responsável legal pela proposta" name="enderecoproponente" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Telefone para contato do proponente" name="telefoneproponente" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Nome do evento/show/espetáculo" name="nomeevento" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="A proposta destina-se ao formato de" name="formato_proposta" rules={[{ required: true }]}>
            <Radio.Group >
              <Radio value={1}>Evento com venda de ingressos</Radio>
              <Radio value={2}>Evento aberto ao público</Radio>
              <Radio value={3}>Evento fechado destinado a convidados</Radio>
              <Radio value={4}>Gravação</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label='Assinale o perfil do evento' name="perfilevento" rules={[{ required: true }]}>
            <Checkbox.Group>
              <Checkbox value="a">
                Artista ou Grupo artístico local, sem personalidade jurídica ou com personalidade
                jurídica MEI;
              </Checkbox>
              <Checkbox value="b">
                Artista ou Grupo Artístico locais com personalidade jurídica (exceto MEI)
              </Checkbox>
              <Checkbox value="c">
                Escolas, Academias de Dança, ONG’s e congêneres (somente com personalidade
                jurídica);
              </Checkbox>
              <Checkbox value="d">
                Artista ou Grupo artístico nacionais (somente personalidade jurídica);
              </Checkbox>
              <Checkbox value="e">
                Outros eventos locais (lançamentos, solenidades etc.) que não se enquadram nos
                perfis acima e que deverão ser analisados caso a caso pela comissão;
              </Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item label="Horário e data de interesse de pauta" name="horariodata" rules={[{ required: true }]}>
            <Input ></Input>
          </Form.Item>

          <Form.Item label="Apresente aqui informações importantes sobre o seu evento" name="horariodata" rules={[{ required: true }]}>
            <Input  ></Input>
          </Form.Item>
          <Form.Item label="Inclua aqui um portfolio, imagens e/ou videos do seu evento" name="horariodata" rules={[{ required: true }]}>
            <Input  ></Input>
          </Form.Item>
          <Form.Item label="Declaro estar ciente dos termos de solicitação da proposta com base a chamada
pública de abertura de pauta Nª 02/2023 e que a não adequação da proposta ao
espaço corresponde ao não aceite da mesma." name="horariodata" rules={[{ required: true }]}>
            <Checkbox>
              Aceito
            </Checkbox>
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