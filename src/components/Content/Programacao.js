import React from 'react';
import { Card, Tabs, Row, Col } from 'antd';

const { TabPane } = Tabs;

const TheatreSchedule = () => {
    const cardColors = ['#FAD0C9', '#E4C1F9', '#B5EAD7', '#FFE4A1', '#C9E4F9'];

    return (
        <div>
            <Tabs defaultActiveKey="1">
                <TabPane key="1">
                    <Row gutter={[16, 16]} justify="center">
                        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                            <Card
                                title="TAA 206 anos"
                                extra="Data: 29 a 31/05"
                                style={{ backgroundColor: cardColors[0] }}
                            >
                                <p>Visitação</p>
                                <p>Horário: 14h-16h</p>
                            </Card>
                            <Card
                                title="TAA 206 anos"
                                extra="Data: 29/05/2023"
                                style={{ backgroundColor: cardColors[0] }}
                            >
                                <p>
                                    Masterclass "Trajetória do artista:
                                    relações entre teatro, cinema e tv"
                                    com Matheus Nachtergale
                                </p>
                                <p>Horário: 18h-19h</p>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                            <Card
                                title="TAA 206 anos"
                                extra="Data: 30/05/2023"
                                style={{ backgroundColor: cardColors[1] }}
                            >
                                <p>
                                    Oficina "Encenação contemporânea:
                                    escolhas estéticas e processo de criação"
                                    Companhia Budejar Criações Artísticas (MA/CE)
                                </p>
                                <p>Horário: 15h-18h</p>
                            </Card>
                            <Card
                                title="TAA 206 anos"
                                extra="Data: 30/05/2023"
                                style={{ backgroundColor: cardColors[1] }}
                            >
                                <p>
                                    Ciclo de Palestras "Gestão e Produção Cultural
                                    nas instituições públicas, privadas e grupos
                                    independentes"
                                    Coom Josiane Oliveira, Alana Araújo e Isoneth Almeida.
                                    Parceria: Sesc Ma.
                                </p>
                                <p>Horário: 19h</p>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                            <Card
                                title="TAA 206 anos"
                                extra="Data: 31/05/2023"
                                style={{ backgroundColor: cardColors[2] }}
                            >
                                <p>Lançamento da visitação virtual</p>
                                <p>Horário: 15h-17h</p>
                            </Card>
                            <Card
                                title="TAA 206 anos"
                                extra="Data: 01/06/2023"
                                style={{ backgroundColor: cardColors[2] }}
                            >
                                <p>
                                    Seminário "Modos de ocupar a cidade e
                                    formação do artista-docente", Com Teatro/Ufma
                                </p>
                                <p>Horário: 09h - no CCVM</p>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                            <Card
                                title="TAA 206 anos"
                                extra="Data: 01/06/2023"
                                style={{ backgroundColor: cardColors[3] }}
                            >
                                <p>Cerimônia de aniversário + Orquestra João do Vale (MA)</p>
                                <p>Horário: 15h-17h</p>
                            </Card>
                            <Card
                                title="TAA 206 anos"
                                extra="Data: 01/06/2023"
                                style={{ backgroundColor: cardColors[3] }}
                            >
                                <p>Espetáculo "Sobre Azares Futuros"</p>
                                <p>Companhia Budejar Criações Artísticas (MA/CE)</p>
                                <p>Ingressos limitados</p>
                                <p>Horário: 20h</p>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                            <Card
                                title="TAA 206 anos"
                                extra="Data: 02/06/2023"
                                style={{ backgroundColor: cardColors[4] }}
                            >
                                <p>Espetáculo "A Carroça é nossa"</p>
                                <p>Xama Teatro (MA)</p>
                                <p>Ingressos limitados</p>
                                <p>Horário: 18h</p>
                            </Card>
                            <Card
                                title="TAA 206 anos"
                                extra="Data: 02/06/2023"
                                style={{ backgroundColor: cardColors[4] }}
                            >
                                <p>Show "Lado B"</p>
                                <p>Emanuele Paz (MA)</p>
                                <p>Ingressos limitados</p>
                                <p>Horário: 19h-20h</p>
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
            </Tabs>
        </div>
    );
};

export default TheatreSchedule;
