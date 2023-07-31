import { List } from 'antd';
import React from 'react';
import { Layout, Typography } from 'antd';
import MenuBurguer from '../components/Header/MenuBurguer.js';
import FooterComponent from '../components/Footer/FooterComponent';
const { Content } = Layout;
const { Title } = Typography;

const data = [
  {
    title: 'Ciclo de Formação em Artes Cênicas no Teatro Arthur Azevedo: Uma experiência inesquecível!',
    description: 'O Ciclo de Formação em Artes Cênicas no Teatro Arthur Azevedo foi uma experiência transformadora. Através de workshops intensivos, práticas de cena e um ambiente acolhedor, foram exploradas diferentes técnicas e gêneros teatrais',
    image: 'https://i.ibb.co/y6BjDVk/Whats-App-Image-2023-05-25-at-17-40-32.jpg',
  },
  {
    title: 'Celebração dos 206 Anos do Teatro Arthur Azevedo: Uma história de arte e cultura!',
    description: 'Na semana de comemoração ao aniversário de 206 anos do Teatro Arthur Azevedo, uma atmosfera vibrante tomou conta do local. O teatro foi palco de várias experiências emocionantes, encantando o público com visitações, performance teatral, shows. Destacando a importância do Teatro Arthur Azevedo como um ícone da cultura e da arte.',
    image: 'https://i.ibb.co/pJTrCbf/206taa.png',
  },
  {
    title: 'Teatro Arthur Azevedo inaugura Núcleo de Memória e Pesquisa: preservando a história e impulsionando a criação artística!',
    description: 'O Teatro Arthur Azevedo inaugurou seu Núcleo de Memória e Pesquisa, um espaço dedicado à preservação e estudo da história teatral. Com um acervo rico em documentos e registros audiovisuais, o núcleo busca resgatar memórias, estimular pesquisas e inspirar novas criações artísticas. Além disso, promoverá atividades como palestras e exposições, fortalecendo o compromisso do teatro em preservar a cultura e valorizar sua importância como agente transformador na sociedade.',
    image: 'https://i.ibb.co/Zf2MNgH/Whats-App-Image-2023-05-25-at-17-40-23.jpg',
  },
];

const AllNews = () => (
  <Layout>
    <MenuBurguer />
    <Content style={{ padding: '50px' }}>
      <Title level={2}>Notícias</Title>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            extra={
              <img
                width={272}
                alt="logo"
                src={item.image}
              />
            }
          >
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </Content>
    <FooterComponent />
  </Layout>
)
export default AllNews;
