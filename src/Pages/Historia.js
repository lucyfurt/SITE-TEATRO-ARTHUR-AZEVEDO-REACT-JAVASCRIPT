import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import { Layout, Tabs, Card, Divider, Col, Row } from 'antd';
import MenuHome from '../components/Header/MenuHome';
import FooterComponent from '../components/Footer/FooterComponent';
const { TabPane } = Tabs;
const { Meta } = Card;
const { Content } = Layout;

function Historia() {
    return (
        <>
            <MenuHome />
            <Layout>
                <Divider orientation="left">
                    <h1>História</h1>
                </Divider>
                <Content>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Tabs tabPosition="left">
                                <TabPane tab="Fundação" key="1">
                                    <Card>
                                        <Meta
                                            description="O teatro foi construído entre os anos de 1816 e 1817 e foi inicialmente chamado de Theatro de São Luís. O projeto foi idealizado pelo então governador Bernardo de Sousa Franco, que buscava proporcionar à população um espaço dedicado às artes cênicas e à cultura em geral.

                      Ao longo do tempo, o teatro passou por diversas reformas e modificações para atender às demandas e necessidades da época. No ano de 1884, o teatro foi reinaugurado e recebeu o nome de Theatro Arthur Azevedo em homenagem ao dramaturgo e jornalista maranhense Arthur Azevedo, uma das principais figuras da literatura e do teatro brasileiro naquele período."
                                        />
                                    </Card>
                                </TabPane>
                                <TabPane tab="Apolônio Pinto" key="2">
                                    <Card>
                                        <Meta
                                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur dolor sit amet tellus lobortis, eget hendrerit libero accumsan. Curabitur sed interdum metus. Donec pellentesque vitae purus a sollicitudin. Fusce eleifend sem eu massa vulputate, vitae dapibus urna efficitur. Nam maximus neque id augue faucibus, sed pellentesque lacus maximus. Phasellus dignissim vitae diam vel efficitur. Vestibulum dictum, neque in vulputate vehicula, dolor mi interdum augue, et fermentum nibh nulla sed massa. Nulla sit amet auctor eros, id placerat nibh. Maecenas quis volutpat dolor. Praesent ultricies odio non purus rutrum, at ultrices dui congue. Cras bibendum auctor cursus."
                                        />
                                    </Card>
                                </TabPane>
                                <TabPane tab="Arthur Azevedo" key="3">
                                    <Card>
                                        <Meta
                                            description="Arthur Azevedo foi um importante dramaturgo, jornalista e escritor brasileiro, nascido em 7 de julho de 1855, em São Luís, no estado do Maranhão. Ele foi uma figura chave no cenário cultural e teatral do Brasil do final do século XIX e início do século XX.

                      Arthur Azevedo nasceu em uma família de tradição artística e literária. Seu pai, Sotero dos Reis Azevedo, era poeta e dramaturgo, e sua mãe, Flora Amélia Gomes de Azevedo, também possuía habilidades artísticas. Desde cedo, Arthur Azevedo demonstrou interesse pela literatura e teatro, participando de peças teatrais amadoras em sua cidade natal.

                      Em 1877, aos 22 anos, Arthur Azevedo mudou-se para o Rio de Janeiro, então capital do Brasil, onde deu continuidade à sua carreira no teatro e jornalismo. Ele colaborou com diversos jornais e revistas, tornando-se conhecido por suas crônicas e críticas teatrais. Arthur Azevedo também se destacou como autor de peças teatrais, comédias e sainetes, sendo um dos principais representantes do teatro de costumes do Brasil. Suas obras retratavam a sociedade brasileira da época, satirizando comportamentos e questões sociais. O Teatro Arthur Azevedo, localizado em São Luís, foi nomeado em sua homenagem, como reconhecimento à sua contribuição para a cultura maranhense e brasileira."
                                        />
                                    </Card>
                                </TabPane>
                            </Tabs>
                        </Col>
                        <Col xs={24} md={12}>
                            <Carousel style={{ width: '100%', height: 'auto' }}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.ibb.co/8Ppnk0Q/Teatro-Arthur-Azevedo.jpg"
                                        alt="1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.ibb.co/JxKBXZC/IMG-7889.jpg"
                                        alt="2"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.ibb.co/yfP12Y1/IMG-7888.jpg"
                                        alt="3"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Content>
                <FooterComponent />
            </Layout>
        </>
    );
}

export default Historia;
