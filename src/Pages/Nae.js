import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import { Layout, Tabs, Card, Divider, Col, Row } from 'antd';
import MenuHome from '../components/Header/MenuHome';
import FooterComponent from '../components/Footer/FooterComponent';
const { TabPane } = Tabs;
const { Meta } = Card;
const { Content } = Layout;

function Nae() {
  return (
    <>
      <MenuHome />
      <Layout>
        <Divider orientation="left">
          <h1>Núcleo Arte Educação</h1>
        </Divider>
        <Content>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Tabs tabPosition="top">
                <TabPane tab="Sobre" key="1">
                  <Card>
                    <Meta
                      description="O Núcleo de Arte Educação (NAE) foi fundado em [ano] com o objetivo de promover a educação artística e cultural por meio de atividades e cursos voltados para a comunidade. O NAE oferece aulas de dança, música e teatro para todas as idades, com foco no desenvolvimento criativo, expressão pessoal e formação de artistas. Ao longo dos anos, o NAE tem se destacado como um importante centro de formação artística, contribuindo para o enriquecimento cultural da região." />
                  </Card>
                </TabPane>
                <TabPane tab="Dança" key="2">
                  <Card>
                    <Meta
                      description="O NAE oferece uma variedade de cursos de dança para todas as idades e níveis de habilidade. Os estilos de dança incluem balé clássico, dança contemporânea, danças folclóricas e muito mais. Os alunos têm a oportunidade de participar de apresentações e espetáculos, mostrando o resultado do seu aprendizado e talento." />
                  </Card>
                </TabPane>
                <TabPane tab="Música" key="3">
                  <Card>
                    <Meta
                      description="O Núcleo de Arte Educação do Teatro Arthur Azevedo oferece aulas de música para diversos instrumentos, como piano, violão, violino, bateria e muito mais. Os alunos têm a oportunidade de aprender técnicas musicais, teoria e participar de grupos musicais, orquestras e corais. O NAE também promove recitais e concertos para os alunos mostrarem seu talento ao público." />
                  </Card>
                </TabPane>
                <TabPane tab="Teatro" key="4">
                  <Card>
                    <Meta
                      description="O NAE oferece aulas de interpretação, improvisação, técnicas de palco, voz e expressão corporal. Os alunos têm a oportunidade de participar de montagens teatrais, peças e espetáculos, explorando diferentes gêneros e estilos de atuação." />
                  </Card>
                </TabPane>
              </Tabs>
            </Col>
            <Col xs={24} md={12}>
              <Carousel style={{ width: '100%', height: 'auto' }}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://i.ibb.co/8Ppnk0Q/Teatro-Arthur-Azevedo.jpg"
                    alt="1"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Content>
        <FooterComponent />
      </Layout>
    </>
  );
}

export default Nae;
