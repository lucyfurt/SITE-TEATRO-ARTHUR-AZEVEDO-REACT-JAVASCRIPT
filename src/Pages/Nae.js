import React from 'react';
import { Layout, Typography, Tabs, Carousel } from 'antd';

const { Content, Header, Footer } = Layout;
const { Title } = Typography;
const { TabPane } = Tabs;

function Nae() {
  return (
    <Layout>
      <Header>
        <Title level={3}>
          <a href='/'>Teatro Arthur Azevedo</a>
        </Title>
      </Header>
      <Content>
        <Tabs defaultActiveKey="1" type="card">
          <TabPane tab="Núcleo Arte Educação" key='1'>
            <Title level={4}>Núcleo Arte Educação</Title>
            <p>O Núcleo Arte Educação (NAE) do Teatro Arthur Azevedo é responsável por coordenar e promover as atividades educativas e culturais relacionadas ao teatro. O NAE oferece uma variedade de cursos e oficinas para crianças, jovens e adultos interessados em explorar e aprimorar suas habilidades artísticas. Além das aulas regulares de dança, música e teatro, o NAE organiza workshops, palestras, seminários e eventos especiais para a comunidade, contribuindo para a disseminação da arte e cultura na região.</p>
            <Carousel autoplay>
              <div>
                <img src="https://i.ibb.co/8Ppnk0Q/Teatro-Arthur-Azevedo.jpg" alt="Núcleo Arte Educação" width={'100%'} />
              </div>
            </Carousel>
          </TabPane>
          <TabPane tab="História do NAE" key="2">
            <Title level={4}>História do NAE</Title>
            <p>O Núcleo de Arte Educação (NAE) foi fundado em [ano] com o objetivo de promover a educação artística e cultural por meio de atividades e cursos voltados para a comunidade. O NAE oferece aulas de dança, música e teatro para todas as idades, com foco no desenvolvimento criativo, expressão pessoal e formação de artistas. Ao longo dos anos, o NAE tem se destacado como um importante centro de formação artística, contribuindo para o enriquecimento cultural da região.</p>
            <Carousel autoplay>
              <div>
                <img src="https://i.ibb.co/8Ppnk0Q/Teatro-Arthur-Azevedo.jpg" alt="História do NAE" width={'100%'} />
              </div>
            </Carousel>
          </TabPane>
          <TabPane tab="Dança" key="3">
            <Title level={4}>Dança</Title>
            <p>O Teatro Arthur Azevedo oferece uma variedade de cursos de dança para todas as idades e níveis de habilidade. Os estilos de dança incluem balé clássico, dança contemporânea, danças folclóricas e muito mais. Os alunos têm a oportunidade de participar de apresentações e espetáculos, mostrando o resultado do seu aprendizado e talento.</p>
            <Carousel autoplay>
              <div>
                <img src="https://i.ibb.co/8Ppnk0Q/Teatro-Arthur-Azevedo.jpg" alt="Dança" width={'100%'} />
              </div>
            </Carousel>
          </TabPane>
          <TabPane tab="Música" key="4">
            <Title level={4}>Música</Title>
            <p>O Núcleo de Arte Educação do Teatro Arthur Azevedo oferece aulas de música para diversos instrumentos, como piano, violão, violino, bateria e muito mais. Os alunos têm a oportunidade de aprender técnicas musicais, teoria e participar de grupos musicais, orquestras e corais. O NAE também promove recitais e concertos para os alunos mostrarem seu talento ao público.</p>
            <Carousel autoplay>
              <div>
                <img src="https://i.ibb.co/8Ppnk0Q/Teatro-Arthur-Azevedo.jpg" alt="Música" width={'100%'} />
              </div>
            </Carousel>
          </TabPane>
          <TabPane tab="Teatro" key="5">
            <Title level={4}>Teatro</Title>
            <p>O Teatro Arthur Azevedo é um espaço dedicado à arte do teatro. O NAE oferece aulas de interpretação, improvisação, técnicas de palco, voz e expressão corporal. Os alunos têm a oportunidade de participar de montagens teatrais, peças e espetáculos, explorando diferentes gêneros e estilos de atuação.</p>
            <Carousel autoplay>
              <div>
                <img src="https://i.ibb.co/8Ppnk0Q/Teatro-Arthur-Azevedo.jpg" alt="Teatro" width={'100%'} />
              </div>
            </Carousel>
          </TabPane>
        </Tabs>
      </Content>
      <Footer>
        <Title level={5}>
          Teatro Arthur Azevedo © Todos os direitos reservados {new Date().getFullYear()}
        </Title>
      </Footer>
    </Layout>
  );
}
export default Nae;
