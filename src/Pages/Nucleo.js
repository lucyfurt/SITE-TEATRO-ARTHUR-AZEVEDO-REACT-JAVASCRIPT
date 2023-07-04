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
                    <Title level={2}>Núcleo de Memória e Pesquisa</Title>

                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Card>
                                <Image src="https://i.ibb.co/XLHVTWB/0005.png" alt="Imagem do arquivo" />

                            </Card>
                        </Col>

                        <Col span={12}>
                            <Card>
                                <Title level={2}>Biblioteca Arão Paranaguá</Title>
                                <Title level={3}>Missão e Valores</Title>
                                <Text strong style={{ fontSize: '24px' }}>Missão:</Text>
                                <Text style={{ fontSize: '24px' }}>
                                    Descrição da missão do Núcleo de Memória ou da biblioteca em relação à preservação e
                                    disseminação da informação.
                                </Text>
                                <br />
                                <Text strong style={{ fontSize: '24px' }}>Valores:</Text>
                                <Text style={{ fontSize: '24px' }}>
                                    Descrição dos valores que norteiam o trabalho do Núcleo de Memória, como integridade,
                                    acessibilidade, colaboração, etc.
                                </Text>
                            </Card>
                        </Col>
                    </Row>

                    <Title level={2}>Acervo</Title>

                    <Card>
                        <Text style={{ fontSize: '24px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate eu tortor et sodales. Maecenas mauris sapien, hendrerit ac turpis maximus, luctus cursus lorem. Quisque aliquet ut sapien vehicula elementum. Maecenas placerat lectus at augue commodo blandit. Suspendisse aliquam tellus a metus sodales sollicitudin. Integer vehicula erat sed nisl euismod luctus. Donec felis lorem, fermentum non lorem eu, efficitur scelerisque diam. Nam in pellentesque mi. Phasellus ut commodo dolor, eget tempor tellus. Integer ipsum arcu, euismod a nibh in, volutpat fermentum sem. Sed sed finibus nisl, et scelerisque diam. Donec tempor tempus metus, ut hendrerit urna blandit a. Sed purus mauris, volutpat at euismod nec, ullamcorper a lorem. Fusce a est eget tortor placerat congue eget non ex.

                            Mauris consequat mi quis leo mattis, sit amet viverra dolor blandit. Fusce sit amet justo eget nunc cursus laoreet vitae sit amet mi. Sed placerat lobortis purus. Donec egestas sem sit amet lectus tincidunt sodales. Vestibulum eget imperdiet ligula. Suspendisse iaculis sit amet justo eget egestas. Fusce quis quam volutpat, venenatis orci in, lobortis mauris. Aenean nisl lectus, egestas a lacus quis, sodales tristique metus. Sed auctor leo et dignissim dapibus. Fusce tortor nunc, venenatis et massa eget, accumsan fringilla ipsum. Ut vitae cursus erat, vitae porttitor leo. Proin purus lorem, aliquet et dictum ut, pulvinar in sem. Etiam lacus nunc, pulvinar eget diam ac, bibendum lacinia sem. Praesent dignissim dolor sed ligula aliquam egestas. Nulla sed neque ut turpis laoreet accumsan. Ut posuere turpis nec eleifend pretium.

                            Donec a tempor leo. Morbi efficitur viverra lectus tincidunt malesuada. Cras pharetra volutpat dui et molestie. Nunc lorem justo, commodo in ullamcorper at, egestas volutpat libero. Cras eget metus euismod, imperdiet est nec, placerat enim. Morbi ac enim dapibus, ultricies magna in, sagittis neque. Duis at ipsum nunc. Vivamus eu viverra ipsum. Pellentesque luctus nibh sem, sit amet auctor est ultrices ac. Etiam blandit metus sit amet purus laoreet faucibus. Nullam viverra, metus ultricies sodales posuere, ante sem posuere tellus, sed tempus dolor libero varius turpis. Praesent a tincidunt velit. Vivamus pulvinar nisi vestibulum, laoreet eros vel, luctus nisl. Vivamus scelerisque venenatis lacus eu pulvinar. Nullam vitae tellus sem. Ut pharetra, nunc vel rhoncus commodo, orci massa scelerisque odio, ut ullamcorper augue erat ut leo.
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
