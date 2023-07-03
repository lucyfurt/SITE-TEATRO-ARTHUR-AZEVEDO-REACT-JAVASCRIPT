import React from 'react';
import { Card, Tabs} from 'antd';
import {
  EnvironmentTwoTone,
  BankTwoTone,
  MessageTwoTone,
} from '@ant-design/icons';


const { TabPane } = Tabs;

function Visitacao() {

  return (
    <div>
      <div className="container">
        <Tabs defaultActiveKey="1" centered>
          <TabPane
            tab={
              <span style={{fontSize:'36px', }}>
                <EnvironmentTwoTone />
                Turística
              </span>
            }
            key="1"
          >
            <Card >
              <p style={{fontSize:'24px'}}><strong>Terça das 14h às 17h</strong></p>
              <p style={{fontSize:'24px'}}>
                Não é necessário agendamento, basta chegar à bilheteria e receber as instruções.
                Dependendo da quantidade de visitantes, a visita poderá ser dividida em grupos
                para melhor aproveitamento e segurança de todos.
              </p>
            </Card>
          </TabPane>
          <TabPane
            tab={
              <span style={{fontSize:'36px'}}>
                <BankTwoTone />
                Instituições
              </span>
            }
            key="2"
          >
            <Card >
              <p style={{fontSize:'24px'}}><strong>Terça das 14h às 17h</strong></p>
              <p style={{fontSize:'24px'}}>
                Agendamento por meio de ofício contendo as seguintes informações: dia,
                quantidade de visitantes e faixa etária, deverá ser enviado para o email:
              </p>
              <p style={{fontSize:'24px'}}><MessageTwoTone /><strong>pauta.taa@gmail.com</strong></p>
            </Card>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default Visitacao;
