import React from 'react';
import { Layout, Button, Card, Row, Col } from 'antd';

const { Content } = Layout;
const { Meta } = Card;
const PautaHome = () => {
  return (
    <Layout>
      <Content>
        <div>
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                cover={
                  <img
                    alt="example"
                    src="https://i.ibb.co/8Ppnk0Q/Teatro-Arthur-Azevedo.jpg"
                  />
                }
                actions={[
                  <Button type="primary" href='/pautas' target="_blank"
                  >
                    Saiba mais
                  </Button>
                ]}
              >
                <Meta title="Shows/Espetáculos" description="Teatro, Danças, Shows" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                cover={
                  <img
                    alt="fotografias"
                    src="https://i.ibb.co/c8ZrWSw/formatura-TAA.png"
                  />
                }
                actions={[
                  <Button type="primary" href='/pautas' target="_blank"
                  >
                    Saiba mais
                  </Button>
                ]}
              >
                <Meta title="Fotografias" description="Formaturas" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                cover={
                  <img
                    alt="espacos"
                    src="https://i.ibb.co/2SFmgzf/41-Sal-o-de-Dan-a.jpg"
                  />
                }
                actions={[
                  <Button type="primary" href='/tecnico' target="_blank"
                  >
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
export default PautaHome;
