import React from 'react';
import { Layout, Tabs, Card, Avatar, Divider } from 'antd';
import MenuBurguer from '../components/Header/MenuBurguer.js';
import FooterComponent from '../components/Footer/FooterComponent';
import {
  UserOutlined,
  TeamOutlined,
  ScheduleOutlined,
  DollarCircleOutlined,
  ToolOutlined,
  LaptopOutlined,
  BookOutlined,
  UserAddOutlined,
} from '@ant-design/icons';

const { Content } = Layout;
const { TabPane } = Tabs;
const { Meta } = Card;

const Institutional = () => {
  return (
    <Layout>
      <MenuBurguer />
      <Content>
        <Tabs tabPosition="left">
          <TabPane tab="Diretores" key="1">
            <Card title="Diretor do Teatro">
              <Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title="Victor Silper"
              />
            </Card>
            <Divider />
            <Card title="Diretora Administrativa">
              <Meta
                avatar={<Avatar icon={<TeamOutlined />} />}
                title="Karla Brito"
              />
            </Card>
          </TabPane>
          <TabPane tab="Equipe Técnica" key="2">
            <Card title="Coordenação técnico">
              <Meta
                avatar={<Avatar icon={<ToolOutlined />} />}
                title="Abel Lopes"
              />
            </Card>
          </TabPane>
          <TabPane tab="Administração" key="3">
            <Card title="Chefe de Pauta">
              <Meta
                avatar={<Avatar icon={<ScheduleOutlined />} />}
                title="Samuel Viegas"
              />
            </Card>
            <Divider />
            <Card title="Chefe de Bilheteria">
              <Meta
                avatar={<Avatar icon={<DollarCircleOutlined />} />}
                title="Larissa Ferreira"
              />
            </Card>
            <Divider />
            <Card title="Coordenação de produção">
              <Meta
                avatar={<Avatar icon={<LaptopOutlined />} />}
                title="Joás Coelho"
              />
            </Card>
            <Divider />
            <Card title="Chefe de serviços gerais">
              <Meta
                avatar={<Avatar icon={<UserAddOutlined />} />}
                title="Maria Francisca Moraes"
              />
            </Card>
          </TabPane>
          <TabPane tab="Núcleo Arte Educação" key="4">
            <Card title="Coordenação do NAE">
              <Meta
                avatar={<Avatar icon={<BookOutlined />} />}
                title="Ione Coelho"
              />
            </Card>
          </TabPane>
          <TabPane tab="Núcleo de Memória e Pesquisa" key="5">
            <Card title="Coordenação do Núcleo de Memória e Pesquisa">
              <Meta
                avatar={<Avatar icon={<BookOutlined />} />}
                title="Julio da Hora"
              />
            </Card>
          </TabPane>
        </Tabs>
      </Content>
      <FooterComponent />
    </Layout>
  );
}
export default Institutional;
