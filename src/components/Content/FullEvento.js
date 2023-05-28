import React from 'react';
import { Card, Button, Row, Col, Divider } from 'antd';
import { useState } from 'react';

function FullEvento() {
  const [size, setSize] = useState('large');

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card
            style={{ width: '100%' }}
            title={<span className="card-title">Italo Sena 26/05/2023</span>}
            extra={
              <Button
                className="btn text-center"
                type="primary"
                shape="primary"
                href="https://www.ingressodigital.com/"
                size={size}
                target="_blank"
                style={{ backgroundColor: '#ff8080', borderColor: '#ff8080' }}
              >
                Comprar
              </Button>
            }
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis felis at nulla pretium,
              non euismod mi mollis. Etiam aliquet ultrices sapien. Donec erat sapien, tempor sagittis laoreet
              efficitur, consequat a turpis. Nunc vel sem sit amet purus ullamcorper dapibus ac at mauris.
            
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card
            style={{ width: '100%' }}
            title={<span className="card-title">Atualização 26/05/2023</span>}
            extra={
              <Button
                className="btn text-center"
                type="primary"
                shape="primary"
                href="https://www.ingressodigital.com/"
                size={size}
                target="_blank"
                style={{ backgroundColor: '#80b3ff', borderColor: '#80b3ff' }}
              >
                Comprar
              </Button>
            }
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis felis at nulla pretium,
              non euismod mi mollis. Etiam aliquet ultrices sapien. Donec erat sapien, tempor sagittis laoreet
              efficitur, consequat a turpis. Nunc vel sem sit amet purus ullamcorper dapibus ac at mauris.
             
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card
            style={{ width: '100%' }}
            title={<span className="card-title">Atualização 26/05/2023</span>}
            extra={
                <Button
                className="btn text-center"
                type="primary"
                shape="primary"
                href="https://www.ingressodigital.com/"
                size={size}
                target="_blank"
                style={{ backgroundColor: '#ff8080', borderColor: '#ff8080' }}
              >
                Comprar
              </Button>
            }
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis felis at nulla pretium,
              non euismod mi mollis. Etiam aliquet ultrices sapien. Donec erat sapien, tempor sagittis laoreet
              efficitur, consequat a turpis. Nunc vel sem sit amet purus ullamcorper dapibus ac at mauris.
            
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card
            style={{ width: '100%' }}
            title={<span className="card-title">Atualização 26/05/2023</span>}
            extra={
              <Button
                className="btn text-center"
                type="primary"
                shape="primary"
                href="https://www.ingressodigital.com/"
                size={size}
                target="_blank"
                style={{ backgroundColor: '#80b3ff', borderColor: '#80b3ff' }}
              >
                Comprar
              </Button>
            }
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis felis at nulla pretium,
              non euismod mi mollis. Etiam aliquet ultrices sapien. Donec erat sapien, tempor sagittis laoreet
              efficitur, consequat a turpis. Nunc vel sem sit amet purus ullamcorper dapibus ac at mauris.
            
            </p>
          </Card>
        </Col>
      </Row>
<Divider/>
      <Button
        className="button text-center"
        type="primary"
        
        size={size}
        href="/index"
        target="_blank"
        style={{ backgroundColor: '#ffcc80',  }}
      >
        Ver todos os eventos
      </Button>
    </>
  );
}

export default FullEvento;
