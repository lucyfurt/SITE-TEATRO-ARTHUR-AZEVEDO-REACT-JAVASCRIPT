import React from 'react';
import { Layout, Typography, Tabs, Card, Avatar, Divider } from 'antd';
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

const { Content, Header, Footer } = Layout;
const { Title } = Typography;
const { TabPane } = Tabs;
const { Meta } = Card;

const Institutional = () => {
  return (
    <Layout>
      <Header style={{ background: '#6d0202', padding: '20px' }}>
        <Title level={3} style={{ color: '#fff', margin: 0 }}>
          <a style={{ color: '#fff' }} href='/'>Teatro Arthur Azevedo</a>
        </Title>
      </Header>
      <Content style={{ padding: '50px' }}>
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
            <Card title="Chefe de Pauta">
              <Meta
                avatar={<Avatar icon={<ScheduleOutlined />} />}
                title="Samuel Viegas"
              />
            </Card>
            <Divider />
            <Card title="Coordenação técnico">
              <Meta
                avatar={<Avatar icon={<ToolOutlined />} />}
                title="Abel Lopes"
              />
            </Card>
          </TabPane>
          <TabPane tab="Administração" key="3">
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
          </TabPane>
          <TabPane tab="Outros" key="4">
            <Card title="Coordenação do NAE">
              <Meta
                avatar={<Avatar icon={<BookOutlined />} />}
                title="Ione Coelho"
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
        </Tabs>
      </Content>
      <Footer style={{ background: '#6d0202', padding: '20px', textAlign: 'center', color: '#fff' }}>
        Teatro Arthur Azevedo © Todos os direitos reservados {new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default Institutional;
