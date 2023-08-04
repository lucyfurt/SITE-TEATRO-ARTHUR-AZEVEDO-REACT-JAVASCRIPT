import React from 'react';
import { Card, Tabs } from 'antd';
import {
  EnvironmentTwoTone,
  BankTwoTone
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
                Instituições
              </span>
            }
            key="1"
          >
            <Card >
              <p><strong>Terça das 14h às 18h</strong></p>
              <p>
                As visitas guiadas para as instituições, devem ser agendadas por meio de um
                ofício contendo as seguintes informações: data da visita, número de visitantes e faixa etária do grupo.
                O ofício deve ser encaminhado para o seguinte e-mail: pauta.taa@gmail.com </p>
            </Card>
          </TabPane>
          <TabPane
            tab={
              <span>
                <BankTwoTone />
                Turística
              </span>
            }
            key="2"
          >
            <Card >
              <p><strong>Quarta das 14h às 18h</strong></p>
              <p>
                O Teatro Arthur Azevedo oferece Visitas Guiadas às quartas-feiras para o
                público em geral, com opções de visita curta e de longa duração.
                Ambas proporcionam um tour completo por todo o local.
              </p>
            </Card>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
export default Visitacao;
