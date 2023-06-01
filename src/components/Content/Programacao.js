import React from 'react';
import { Card, Row, Col, Pagination, Button } from 'antd';

const TheatreSchedule = () => {
    const cardColors = ['#FAD0C9', '#E4C1F9', '#B5EAD7', '#FFE4A1', '#C9E4F9'];
    const cardsPerPage = 4;
    const totalCards = 12;
    const [currentPage, setCurrentPage] = React.useState(1);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const cardData = [
        {
            title: 'TAA 206 anos',
            extra: 'Data: 29 a 31/05',
            backgroundColor: cardColors[0],
            content: [
                { label: 'Visitação', value: 'Horário: 14h-16h' },
            ],
        },
        {
            title: 'TAA 206 anos',
            extra: "Data: 30/05/2023",
            backgroundColor: cardColors[1],
            content: [
                { label: ' Oficina "Encenação contemporânea escolhas estéticas e processo de criação Companhia Budejar Criações Artísticas MA-CE', value: 'Horário: 15h-18h' },
            ],
        },
        {
            title: 'TAA 206 anos',
            extra: "Data: 30/05/2023",
            backgroundColor: cardColors[2],
            content: [
                { label: ' Ciclo de Palestras "Gestão e Produção Cultural nas instituições públicas, privadas e grupos independentes"Com Josiane Oliveira, Alana Araújo e Isoneth Almeida. Parceria: Sesc Ma.', value: 'Horário: 19h' },
            ],
        },
        {
            title: 'TAA 206 anos',
            extra: "Data: 31/05/2023",
            backgroundColor: cardColors[3],
            content: [
                { label: 'Lançamento da visitação virtual', value: 'Horário: 15h-17h' },
            ],
        },
        {
            title: 'TAA 206 anos',
            extra: "Data: 01/06/2023",
            backgroundColor: cardColors[4],
            content: [
                { label: ' Seminário "Modos de ocupar a cidade e formação do artista-docente", Com Teatro/Ufma', value: 'Horário: 09h - no CCVM' },
            ],
        },
        {
            title: 'TAA 206 anos',
            extra: "Data: 01/06/2023",
            backgroundColor: cardColors[0],
            content: [
                { label: 'Cerimônia de aniversário + Orquestra João do Vale (MA)', value: 'Horário: 15h-17h' },
            ],
        },
        {
            title: 'TAA 206 anos',
            extra: "Data: 01/06/2023",
            backgroundColor: cardColors[1],
            content: [
                { label: 'Espetáculo "Sobre Azares Futuros" Companhia Budejar Criações Artísticas (MA/CE)', value: 'Horário: 20h' },
            ],
        },
        {
            title: 'TAA 206 anos',
            extra: "Data: 01/06/2023",
            backgroundColor: cardColors[2],
            content: [
                { label: 'Espetáculo "A Carroça é nossa" Xama Teatro (MA)', value: 'Horário: 18h' },
            ],
        },
        {
            title: 'TAA 206 anos',
            extra: "Data: 02/06/2023",
            backgroundColor: cardColors[3],
            content: [
                { label: 'Show "Lado B", Emanuele Paz (MA)', value: 'Horário: 19h-20h' },
            ],
        },
        {
            title: 'Stand Up',
            extra: "Data: 03/06/2023",
            backgroundColor: cardColors[4],
            content: [
                { label: 'Stand Up Modo Efetivo pt.2  Sujeito Homem - Tiago Ventura', value: 'Horário: 21h' },
            ],
        },
        {
            title: 'Show',
            extra: "Data: 04/06/2023",
            backgroundColor: cardColors[0],
            content: [
                { label: 'Bee Gees Experience', value: 'Horário: 21h' },
            ],
        },
    ];

    return (
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
                                    style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', width: '100%', 
                                    backgroundColor: 'transparent', color: '#1890ff', borde:'1px' }}>
                                         
                                    Compre aqui
                                </Button>
                            ) : null}
                        </Card>
                    </Col>
                ))}
            </Row>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                <Pagination
                    current={currentPage}
                    pageSize={cardsPerPage}
                    total={totalCards}
                    onChange={setCurrentPage}
                />
            </div>
        </div>
    );
};
export default TheatreSchedule;
