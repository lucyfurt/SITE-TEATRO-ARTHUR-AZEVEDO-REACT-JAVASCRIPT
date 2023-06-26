import React from 'react';
import { Layout, Typography } from 'antd';

const { Content, Header, Footer } = Layout;
const { Title } = Typography;

const newsData = [
  {
    title: 'Notícia 1',
    content: 'Descrição da notícia 1',
    image: 'https://i.ibb.co/y6BjDVk/Whats-App-Image-2023-05-25-at-17-40-32.jpg',
    author: 'Vitor Silper',
    link: '/allNews'

  },
  {
    title: 'Notícia 2',
    content: 'Descrição da notícia 2',
    author: 'Vitor Silper',
    image: 'https://i.ibb.co/pJTrCbf/206taa.png',
    link: '/allNews'
  },
  {
    title: 'Notícia 3',
    content: 'Descrição da notícia 3',
    author: 'Vitor Silper',
    image: 'https://i.ibb.co/Zf2MNgH/Whats-App-Image-2023-05-25-at-17-40-23.jpg',
    link: '/allNews'
  },
]

const NewsPage = () => {
  return (
    <Layout>
      <Header style={{ background: '#6d0202', padding: '20px' }}>
        <Title level={3} style={{ color: '#fff', margin: 0 }}>
          <a style={{ color: '#fff' }} href='/'>Teatro Arthur Azevedo</a>
        </Title>
      </Header>

      <Content style={{ padding: '50px' }}>
        <Title level={2}>Notícias</Title>
        <div className="news-page-container">
          <div className="news-page">
            <div className="news-container">
              {newsData.map((news, index) => (
                <div key={index} className="news-card">
                  <img src={news.image} alt={news.title} className="news-image" />
                  <h2>{news.title}</h2>
                  <p>{news.content}</p>
                  <p className="author">Por: {news.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Content>

      <Footer style={{ background: '#6d0202', padding: '20px', textAlign: 'center', color: '#fff' }}>
        Teatro Arthur Azevedo  © Todos os direitos reservados 2023
      </Footer>
    </Layout>
  );
};

export default NewsPage;
