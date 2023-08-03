import React from 'react';
import { Avatar, Card, Row, Col, Image } from 'antd';

import MenuBurguer from '../components/Header/MenuBurguer.js'
import FooterComponent from '../components/Footer/FooterComponent';
const { Meta } = Card;

const Institucional = () => {

  return (
    <>
    <MenuBurguer/>
      <Row>
        <Col>
          <Card
            style={{
              width: 300,
              marginTop: 16,
            }}
          >
            <Meta
              avatar={<Avatar style={{ backgroundColor: '#f56a00' }}>V</Avatar>}
              title="Diretor do Teatro"
              description="Victor Silper"
            />
          </Card>
          <Card
            style={{
              width: 300,
              marginTop: 16,
            }}

          >
            <Meta
              avatar={<Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>}
              title="Diretora Administrativa"
              description="Karla Brito"
            />
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: 300,
              marginTop: 16,
            }}
          >
            <Meta
              avatar={<Avatar style={{ backgroundColor: '#f56a00' }}>S</Avatar>}
              title="Chefe de Pauta"
              description="Samuel Viegas"
            />
          </Card>
          <Card
            style={{
              width: 300,
              marginTop: 16,
            }}

          >
            <Meta
              avatar={<Avatar style={{ backgroundColor: '#f56a00' }}>L</Avatar>}
              title="Chefe de Bilheteria"
              description="Larissa Ferreira"
            />
          </Card>
          <Card
            style={{
              width: 300,
              marginTop: 16,
            }}

          >
            <Meta
              avatar={<Avatar style={{ backgroundColor: '#f56a00' }}>M</Avatar>}
              title="Chefe de Serviços Gerais"
              description="Maria Francisca Moraes"
            />
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: 300,
              marginTop: 16,
            }}
          >
            <Meta
              avatar={<Avatar style={{ backgroundColor: '#f56a00' }}>A</Avatar>}
              title="Coordenação Técnica"
              description="Abel Lopes"
            />
          </Card>
          <Card
            style={{
              width: 300,
              marginTop: 16,
            }}

          >
            <Meta
              avatar={<Avatar style={{ backgroundColor: '#f56a00' }}>J</Avatar>}
              title="Coordenação de Produção"
              description="Joás Coelho"
            />
          </Card>
          <Card
            style={{
              width: 300,
              marginTop: 16,
            }}

          >
            <Meta
              avatar={<Avatar style={{ backgroundColor: '#f56a00' }}>J</Avatar>}
              title="Coordenação do Núcle de Memória e Pesquisa"
              description="Julio da Hora"
            />
          </Card>
          <Card
            style={{
              width: 300,
              marginTop: 16,
            }}

          >
            <Meta
              avatar={<Avatar style={{ backgroundColor: '#f56a00' }}>I</Avatar>}
              title="Coordenação do Nae"
              description="Ione Coelho"
            />
          </Card>
        </Col>
        <Col>
        <Image
          src="https://i.ibb.co/vmpv5sD/logo206.png"
          alt="taa"
          width={350}
          preview={false}
        />
        </Col>
      </Row>
<FooterComponent/>
    </>
  );
};
export default Institucional;