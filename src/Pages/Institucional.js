import React from 'react';
import { Card, Avatar, Layout, Typography, Divider } from 'antd';
import {
    UserOutlined, TeamOutlined, ScheduleOutlined,
    DollarCircleOutlined, ToolOutlined, LaptopOutlined, BookOutlined, UserAddOutlined
} from '@ant-design/icons';

const { Content, Header, Footer } = Layout;
const { Meta } = Card;
const { Title } = Typography;

const Institutional = () => {
    return (
        <div>
            <Layout>
            <Header style={{ background: '#6d0202', padding: '20px' }}>
                <Title level={3} style={{ color: '#fff', margin: 0 }}>
                  <a style={{color: '#fff'}}href='/'>Teatro Arthur Azevedo</a>  
                </Title>
                </Header>
                <Content style={{ padding: '20px' }}>
                    <Card title="Institucional" style={{ width: 500, margin: '0 auto' }}>
                        <Meta
                            avatar={<Avatar icon={<UserOutlined />} />}
                            title="Diretor do Teatro"
                            description="Victor Silper"
                        />
                        <Divider />
                        <Meta
                            avatar={<Avatar icon={<TeamOutlined />} />}
                            title="Diretora Administrativa"
                            description="Karla Brito"
                        />
                        <Divider />
                        <Meta
                            avatar={<Avatar icon={<ScheduleOutlined />} />}
                            title="Chefe de Pauta"
                            description="Samuel Viegas"
                        />
                        <Divider />
                        <Meta
                            avatar={<Avatar icon={<ToolOutlined />} />}
                            title="Coordenação técnico"
                            description="Abel Lopes"
                        />
                        <Divider />
                        <Meta
                            avatar={<Avatar icon={<DollarCircleOutlined />} />}
                            title="Chefe de Bilheteria"
                            description="Larissa Ferreira"
                        />
                        <Divider />
                        <Meta
                            avatar={<Avatar icon={<LaptopOutlined />} />}
                            title="Coordenação de produção"
                            description="Joás Coelho"
                        />
                        <Divider />
                        <Meta
                            avatar={<Avatar icon={<BookOutlined />} />}
                            title="Coordenação do NAE"
                            description="Ione Coelho"
                        />
                        <Divider />
                        <Meta
                            avatar={<Avatar icon={<UserAddOutlined />} />}
                            title="Chefe de serviços gerais"
                            description="Maria Francisca Moraes"
                        />
                        <Divider />
                    </Card>
                </Content>
                <Footer style={{ background: '#6d0202', padding: '20px', textAlign: 'center', color: '#fff' }}>
                    Teatro Arthur Azevedo  © Todos os direitos reservados 2023
                </Footer>
            </Layout>
        </div>
    );
};

export default Institutional;
