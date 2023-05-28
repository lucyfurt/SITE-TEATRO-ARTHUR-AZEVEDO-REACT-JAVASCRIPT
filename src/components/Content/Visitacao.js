import React from 'react';
import { Row, Col, Button, Modal } from 'antd';
import { useState } from 'react';
import {
  EnvironmentTwoTone,
  BankTwoTone,
  CheckCircleTwoTone,
  MessageTwoTone
} from '@ant-design/icons';

function Visitacao() {
  const [size, setSize] = useState('large');
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '50px' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={12} lg={12}>
            <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><EnvironmentTwoTone />Turística</h1>
            <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><strong>Terça das 14h às 17h</strong></p>
            <p style={{ display: 'flex', justifyContent: 'justify', alignItems: 'justify', padding: '20px' }}>Não é necessário agendamento,
              basta chegar à bilheteria e receber as instruções. Dependendo da quantidade de visitantes, a visita poderá ser dividida
              em grupos para melhor aproveitamento e segurança de todos.</p>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12}>
            <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><BankTwoTone />Instituições</h1>
            <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><strong>Terça das 14h às 17h</strong></p>
            <p style={{ display: 'flex', justifyContent: 'justify', alignItems: 'center', padding: '20px' }}>Agendamento por meio de ofício
              contendo as seguintes informações: dia, quantidade de visitantes e faixa etária, deverá ser enviado para o email:</p>
            <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><strong><MessageTwoTone />pauta.taa@gmail.com</strong></p>
            <p>.</p>
          </Col>
        </Row>
      </div>

      <Button className="button text-center" type="primary" shape="primary" size={size} onClick={() => setModal2Open(true)}>
        Mais informações
      </Button>
      <Modal
        title="Protocolos"
        centered
        visible={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <p><CheckCircleTwoTone />Proibido fotos em câmera profissional sem uma autorização prévia.</p>
        <p><CheckCircleTwoTone />É permanentemente proibido entrada nas dependências internas do Teatro com alimentos e bebidas.</p>
        <p><CheckCircleTwoTone />Não é permitido o tour por menores desacompanhados.</p>
      </Modal>
    </>
  );
}

export default Visitacao;
