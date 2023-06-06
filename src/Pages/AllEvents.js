import React from 'react';
import { Card, Row, Col, Pagination, Button, Layout, Typography } from 'antd';
const { Content, Header, Footer } = Layout;
const { Title } = Typography;
const AllEvents = () => {
    const cardColors = ['#FAD0C9', '#E4C1F9', '#B5EAD7', '#FFE4A1', '#C9E4F9'];
    const cardsPerPage = 4;
    const totalCards = 12;
    const [currentPage, setCurrentPage] = React.useState(1);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const cardData = [

        {
            title: 'Stand Up',
            extra: "Data: 03/06/2023",
            backgroundColor: cardColors[0],
            content: [
                { label: 'Stand Up Modo Efetivo pt.2  Sujeito Homem - Tiago Ventura', value: 'Horário: 21h' },
            ],
        },
        {
            title: 'Show',
            extra: "Data: 04/06/2023",
            backgroundColor: cardColors[1],
            content: [
                { label: 'Bee Gees Experience', value: 'Horário: 21h' },
            ],
        },
        {
            title: 'Escola do Rock',
            extra: "Data: 09/06/2023",
            backgroundColor: cardColors[2],
            content: [
                { label: 'Bee Gees Experience', value: 'Horário: 21h' },
            ],
        },
        {
            title: 'Guarnicê',
            extra: "Data: 09/06/2023",
            backgroundColor: cardColors[3],
            content: [
                { label: 'Bee Gees Experience', value: 'Horário: 21h' },
            ],
        },
    ];

    return (
        <>

            <Layout>
                <Header style={{ background: '#f0f2f5', padding: '20px' }}>
                    <Title level={3} style={{ color: '#1890ff', margin: 0 }}>
                        Espetáculos/ Shows
                    </Title>
                </Header>
                <Content>
                    <div>
                        <Row gutter={[16, 16]} justify="center">
                            {cardData.slice(startIndex, endIndex).map((card, index) => (
                                <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
                                    <Card title={card.title} extra={card.extra} style={{ backgroundColor: card.backgroundColor }}>
                                        {card.content.map((item, idx) => (
                                            <p key={idx}>
                                                <strong>{item.label}: </strong>
                                                {item.value}
                                            </p>
                                        ))}
                                        {card.title === 'Stand Up' || card.title === 'Show' ? (

                                            <Button type="primary" href="https://www.ingressodigital.com/" target="_blank"
                                                style={{
                                                    display: 'flex', justifyContent: 'center', marginTop: '20px', width: '100%',
                                                    backgroundColor: 'transparent', color: '#1890ff', borde: '1px'
                                                }}>

                                                Compre aqui
                                            </Button>
                                        ) : null}
                                    </Card>
                                </Col>
                            ))}

                        </Row>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                            <Pagination
                                current={currentPage}
                                pageSize={cardsPerPage}
                                total={totalCards}
                                onChange={setCurrentPage}
                            />
                        </div>

                    </div>
                </Content>
                <Footer style={{ background: '#001529', padding: '20px', textAlign: 'center', color: '#fff' }}>
                    Teatro Arthur Azevedo  © Todos os direitos reservados 2023
                </Footer>
            </Layout>


        </>

    );

};
export default AllEvents;
