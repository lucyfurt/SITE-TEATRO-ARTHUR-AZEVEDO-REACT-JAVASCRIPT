import React from 'react';
import { Layout, Button, Card, Row, Col } from 'antd';

const { Content } = Layout;
const { Meta } = Card;
const Pautas = () => {
  return (
    <Layout>

      <Content style={{ padding: '10px' }}>
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
                  <Button type="primary" href='tecnico' target="_blank"
                    style={{
                      justifyContent: 'center', width: '50%',
                      color: '#fff',
                      border: '1px'
                    }}>

                    Inscrever-se
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
                  <Button type="primary" href='tecnico' target="_blank"
                    style={{
                      justifyContent: 'center', width: '50%',
                      color: '#fff',
                      border: '1px'
                    }}>

                    Inscrever-se
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
                  <Button type="primary" href='tecnico' target="_blank"
                    style={{
                      justifyContent: 'center', width: '50%',
                      color: '#fff',
                      border: '1px'
                    }}>

                    Saiba mais
                  </Button>
                ]}
              >
                <Meta title="Informações Técnicas" description="Espaços, Rider Técnico..." />

              </Card>
            </Col>

          </Row>
        </div>

      </Content>

    </Layout>
  );
}

export default Pautas;
