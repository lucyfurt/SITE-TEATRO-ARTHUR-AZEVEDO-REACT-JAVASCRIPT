import React from 'react';
import { Card, Tabs } from 'antd';
import {
  EnvironmentTwoTone,
  BankTwoTone,
  MessageTwoTone,
} from '@ant-design/icons';
import '../Content/css/visitacao.css'
const { TabPane } = Tabs;

function Visitacao() {

  return (
    <div>
      <div>
        <Tabs defaultActiveKey="1" centered>
          <TabPane
            tab={
              <span>
                <EnvironmentTwoTone />
                Turística
              </span>
            }
            key="1"
          >
            <Card >
              <p><strong>Terça das 14h às 18h</strong></p>
              <p>
                Não é necessário agendamento, basta chegar à bilheteria e receber as instruções.
                Dependendo da quantidade de visitantes, a visita poderá ser dividida em grupos
                para melhor aproveitamento e segurança de todos.
              </p>
            </Card>
          </TabPane>
          <TabPane
            tab={
              <span>
                <BankTwoTone />
                Instituições
              </span>
            }
            key="2"
          >
            <Card >
              <p><strong>Terça das 14h às 18h</strong></p>
              <p>
                Agendamento por meio de ofício contendo as seguintes informações: dia,
                quantidade de visitantes e faixa etária, deverá ser enviado para o email:
              </p>
              <p><MessageTwoTone /><strong>pauta.taa@gmail.com</strong></p>
            </Card>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
export default Visitacao;
