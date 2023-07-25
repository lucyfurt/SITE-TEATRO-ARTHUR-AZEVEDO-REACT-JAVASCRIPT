import React from 'react';
import { Layout, Divider, Row, Col } from 'antd';
import MenuHome from '../components/Header/MenuHome';
import FooterComponent from '../components/Footer/FooterComponent';
import '../Pages/css/pauta.css';
const { Content } = Layout;

function Historia() {
    return (
        <>
            <MenuHome />
            <Layout>
                <Divider orientation="left">
                    <h1>Pautas</h1>
                </Divider>
                <Content>
                    <Row>
                        <Col>
                            <button className="big-rectangle-button">
                                Solicitação de pauta Espetáculos/Shows
                            </button>
                        </Col>
                        <Col>
                            <button className="big-rectangle-button">
                                Solicitação de pauta Fotografias
                            </button>
                        </Col>
                        <Col>
                            <button className="big-rectangle-button">
                                Informaçõoes Técnicas
                            </button>

                        </Col>
                        <Col>

                            <button className="big-rectangle-button">
                                Edital/Normas
                            </button>
                        </Col>
                    </Row>





                </Content>
                <FooterComponent />
            </Layout>
        </>
    );
}
export default Historia;
