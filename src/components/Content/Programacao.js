import React from 'react';
import { Card, Tabs, Row, Col, Input, Calendar } from 'antd';

const { TabPane } = Tabs;
const { Search } = Input;

const TheatreSchedule = () => {
    const cardColors = ['#FAD0C9', '#E4C1F9', '#B5EAD7', '#FFE4A1', '#C9E4F9'];

    return (
        <div>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Teatro" key="1">
                    <Row gutter={[16, 16]}>
                        <Col span={8}>
                            <Card
                                title="TAA 206 anos"
                                extra="Data: 29 a 31/05"
                                
                            >
                                <p>Visitação</p>
                                <p>Horário: 14h-16h</p>
                            </Card>
                            <Card title="TAA 206 anos" extra="Data: 29/05/2023">
                                <p> Masterclass "Trajetória do artista:
                                    relações entre teatro, cinema e tv"
                                    com Matheus Nachtergale
                                </p>
                                <p>Horário: 18h-19h</p>
                            </Card>
                        </Col>
                        <Col span={8}>

                            <Card title="TAA 206 anos" extra="Data: 30/05/2023">
                                <p> Oficina "Encenação contemporânea:
                                    escolhas estéticas e processo de criação"
                                    Companhia Budejar Criações Artísticas (MA/CE)</p>
                                <p>Horário: 15h-18h</p>
                            </Card>
                            <Card title="TAA 206 anos" extra="Data: 30/05/2023">
                                <p>Ciclo de Palestras "Gestão e Produção Cultural
                                    nas instituições públicas, privadas e grupos
                                    independentes"
                                    Coom Josiane Oliveira, Alana Araújo e Isoneth Almeida.
                                    Parceria: Sesc Ma.
                                </p>
                                <p>Horário: 19h</p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="TAA 206 anos" extra="Data: 31/05/2023">
                                <p>Lançamento da visitação virtual
                                </p>
                                <p>Horário: 15h-17h</p>
                            </Card>
                            <Card title="TAA 206 anos" extra="Data: 01/06/2023">
                                <p>Seminário "Modos de ocupar a cidade e 
                                    formação do artista-docente", Com Teatro/Ufma
         
                                </p>
                                <p>Horário: 09h - no CCVM</p>
                            </Card>

                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="Música" key="2">
                    {/* Conteúdo dos eventos de música */}
                </TabPane>
                <TabPane tab="Dança" key="3">
                    {/* Conteúdo dos eventos de dança */}
                </TabPane>
            </Tabs>

        </div>
    );
}

export default TheatreSchedule;
