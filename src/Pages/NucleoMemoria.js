import React from 'react';
import { Card, Row, Col, Typography, Image, Layout, Divider } from 'antd';
import MenuHome from '../components/Header/MenuHome';
import FooterComponent from '../components/Footer/FooterComponent';
const { Content } = Layout;
const { Title, Text } = Typography;
const NucleoMemoria = () => {
    return (
        <Layout>
            <MenuHome />
            <Divider orientation="left">
                <h1>Núcleo de Memória e Pesquisa</h1>
            </Divider>
            <Content>
                <div>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Card>
                                <Title level={2}>Arquivo TAA</Title>

                            </Card>
                        </Col>

                        <Col span={12}>
                            <Card>
                                <Title level={2}>Biblioteca Arão Paranaguá</Title>

                            </Card>
                        </Col>
                    </Row>
                    <Title level={2}>Acervo</Title>

                    <Card>
                        <Text>
                            Em construção...
                        </Text>
                    </Card>
                </div>
            </Content>
            <FooterComponent />
        </Layout>
    );
}
export default NucleoMemoria;
