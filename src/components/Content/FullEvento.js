import React from 'react';
import { Card, Button, Row, Col, Divider } from 'antd';
import  { useState, useEffect } from 'react';

function FullEvento() {
  const [size, setSize] = useState('large');
// Defina as cores dos cards
const cardColors = ['#FAD0C9', '#E4C1F9', '#B5EAD7', '#FFE4A1', '#C9E4F9'];
// Check screen size and set card size accordingly
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setSize('small');
    } else {
      setSize('large');
    }
  };
  window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
    <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
        <Card
          style={{ backgroundColor: cardColors[0]}}
          title={
            <span className="card-title">
              <p>TAA 206 anos</p>
              <p>29/05</p>
            </span>
          }
          size={size}
        >
          <p>
            <h3>Horário</h3>
            <p>14h-16h</p>
            <p>Visitação</p>
            <p>18h-19h</p>
            <p>
              Masterclass "Trajetória do artista: relações entre teatro, cinema e tv" com Matheus Nachtergale
            </p>
          </p>
        </Card>
</Col>
<Col xs={24} sm={12} lg={6}>
        <Card
          style={{backgroundColor: cardColors[1]}}
          title={
            <span className="card-title">
              <p>TAA 206 anos</p>
              <p>30/05</p>
            </span>
          }
          size={size}
        >
          <p>
            <h3>Horário</h3>
            <p>14h-16h</p>
            <p>Visitação</p>
            <p>15h - 18h</p>
            <p>
              Oficina "Encenação contemporânea: escolhas estéticas e processo de criação"
              Companhia Budejar Criações Artísticas (MA/CE)
            </p>
            <p>19h</p>
            <p>
              Ciclo de Palestras "Gestão e Produção Cultural nas instituições públicas, privadas e grupos independentes"
              Coom Josiane Oliveira, Alana Araújo e Isoneth Almeida. Parceria: Sesc Ma.
            </p>
          </p>
        </Card>
</Col>
<Col xs={24} sm={12} lg={6}>
        <Card
          style={{ flex: 1, backgroundColor: cardColors[2] }}
          title={
            <span className="card-title">
              <p>TAA 206 anos</p>
              <p>31/05</p>
            </span>
          }
          size={size}
        >
          <p>
            <h3>Horário</h3>
            <p>14h-16h</p>
            <p>Visitação</p>
            <p>15h-17h</p>
            <p>Lançamento da visitação virtual</p>
          </p>
        </Card>
</Col>
<Col xs={24} sm={12} lg={6}>
        <Card
          style={{ flex: 1, backgroundColor: cardColors[3] }}
          title={
            <span className="card-title">
              <p>TAA 206 anos</p>
              <p>01/06</p>
            </span>
          }
          size={size}
        >
          <p>
            <h3>Horário</h3>
            <p>09h - no CCVM</p>
            <p>Seminário "Modos de ocupar a cidade e formação do artista-docente", Com Teatro/Ufma</p>
            <p>15h - 17h</p>
            <p>Cerimônia de aniversário + Orquestra João do Vale (MA)</p>
            <p>20h</p>
            <p>Espetáculo "Sobre Azares Futuros"</p>
            <p>Companhia Budejar Criações Artísticas (MA/CE)</p>
            <p>Ingressos limitados</p>
          </p>
        </Card>
</Col>
<Col xs={24} sm={12} lg={6}>
        <Card
          style={{  backgroundColor: cardColors[4]}}
          title={
            <span className="card-title">
              <p>TAA 206 anos</p>
              <p>02/06</p>
            </span>
          }
          size={size}
        >
          <p>
            <h3>Horário</h3>
            <p>18h</p>
            <p>Espetáculo "A Carroça é nossa"</p>
            <p>Xama Teatro (MA)</p>
            <p>Ingressos limitados</p>
            <p>19h - 20h</p>
            <p>Show "Lado B"</p>
            <p>Emanuele Paz (MA)</p>
            <p>Ingressos limitados</p>
          </p>
        </Card>
      </Col>
</Row>
      <Divider />

      <Button
        className="button text-center"
        type="primary"
        size={size === 'small' ? 'default' : 'large'}
        href="/index"
        target="_blank"
        style={{ backgroundColor: '#ffcc80' }}
      >
        Ver todos os eventos
      </Button>
    </>
  );
}

export default FullEvento;
