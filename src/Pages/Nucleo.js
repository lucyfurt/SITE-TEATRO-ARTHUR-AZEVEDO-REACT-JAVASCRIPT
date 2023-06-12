import React from 'react';
import { Card, Row, Col, Typography, Image, Layout } from 'antd';
const { Content, Header, Footer } = Layout;
const { Title, Text } = Typography;

const Nucleo = () => {
    return (
        <Layout>
             <Header style={{ background: '#6d0202', padding: '20px' }}>
                <Title level={3} style={{ color: '#fff', margin: 0 }}>
                    <a style={{ color: '#fff' }} href='/'>Teatro Arthur Azevedo</a>
                </Title>
            </Header>
            <Content>
                <div>
                    <Title level={2}>Arquivo e Biblioteca</Title>

                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Card>
                                <Image src="https://i.ibb.co/XLHVTWB/0005.png" alt="Imagem do arquivo" />
                                <Text strong>Catálogo:</Text>
                                <Text>
                                    Descrição do catálogo ou informações relevantes sobre o arquivo e a biblioteca.
                                </Text>
                            </Card>
                        </Col>

                        <Col span={12}>
                            <Card>
                                <Title level={3}>Missão e Valores</Title>
                                <Text strong>Missão:</Text>
                                <Text>
                                    Descrição da missão do Núcleo de Memória ou da biblioteca em relação à preservação e
                                    disseminação da informação.
                                </Text>
                                <br />
                                <Text strong>Valores:</Text>
                                <Text>
                                    Descrição dos valores que norteiam o trabalho do Núcleo de Memória, como integridade,
                                    acessibilidade, colaboração, etc.
                                </Text>
                            </Card>
                        </Col>
                    </Row>

                    <Title level={2}>História do Núcleo de Memória</Title>

                    <Card>
                        <Text>
                            Descrição da história do Núcleo de Memória, incluindo informações sobre sua fundação,
                            desenvolvimento ao longo dos anos e conquistas significativas.
                        </Text>
                    </Card>
                </div>
            </Content>
            <Footer style={{ background: '#6d0202', padding: '20px', textAlign: 'center', color: '#fff' }}>
                Teatro Arthur Azevedo  © Todos os direitos reservados 2023
            </Footer>
        </Layout>
    );
};

export default Nucleo;
