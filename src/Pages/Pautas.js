import React from 'react';
import { Layout, Typography, Button, Card, Row, Col } from 'antd';

const { Content, Header, Footer } = Layout;
const { Title } = Typography;
const { Meta } = Card;
const Pautas = () => {
  return (
    <Layout>
      <Header style={{ background: '#6d0202', padding: '20px' }}>
        <Title level={3} style={{ color: '#fff', margin: 0 }}>
          <a style={{ color: '#fff' }} href='/'>Teatro Arthur Azevedo</a>
        </Title>
      </Header>
      <Content style={{ padding: '10px' }}>
        <Title level={2}>Pedidos de Pautas</Title>

        <div style={{ textAlign: 'center' }}>
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                style={{ width: '100%', height: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://i.ibb.co/8Ppnk0Q/Teatro-Arthur-Azevedo.jpg"
                  />
                }
                actions={[
                  <Button type="primary" href='inscricoes' target="_blank"
                    style={{
                      justifyContent: 'center', width: '50%',
                      color: '#fff',
                      border: '1px'
                    }}>

                    Inscrições
                  </Button>

                ]}
              >
                <Meta title="Shows/Espetáculos" description="Teatro, Danças, Shows, Musicais" />

              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="fotografias"
                    src="https://i.ibb.co/c8ZrWSw/formatura-TAA.png"
                  />
                }
                actions={[
                  <Button type="primary" href='inscricoes' target="_blank"
                    style={{
                      justifyContent: 'center', width: '50%',
                      color: '#fff',
                      border: '1px'
                    }}>

                    Inscrições
                  </Button>
                ]}
              >
                <Meta title="Fotografias" description="Formaturas" />

              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="espacos"
                    src="https://i.ibb.co/2SFmgzf/41-Sal-o-de-Dan-a.jpg"
                  />
                }
                actions={[
                  <Button type="primary" href='inscricoes' target="_blank"
                    style={{
                      justifyContent: 'center', width: '50%',
                      color: '#fff',
                      border: '1px'
                    }}>

                    Inscrições
                  </Button>
                ]}
              >
                <Meta title="Espaços" description="Sala de dança, Sala de coro, Salão Versátil" />

              </Card>
            </Col>

          </Row>
        </div>

      </Content>
      <Footer style={{ background: '#6d0202', padding: '20px', textAlign: 'center', color: '#fff' }}>
        Teatro Arthur Azevedo © Todos os direitos reservados 2023
      </Footer>
    </Layout>
  );
}

export default Pautas;
