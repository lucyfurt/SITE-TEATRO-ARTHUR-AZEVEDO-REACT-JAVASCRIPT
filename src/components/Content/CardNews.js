import { Card, Row, Col } from 'antd';

const { Meta } = Card;

const NewsComponent = () => {
  const newsData = [
    {
      title: 'Notícia 1',
      description: 'Descrição da notícia 1',
      image: 'https://i.ibb.co/y6BjDVk/Whats-App-Image-2023-05-25-at-17-40-32.jpg',
      link: '/allNews'
      
    },
    {
      title: 'Notícia 2',
      description: 'Descrição da notícia 2',
      image: 'https://i.ibb.co/pJTrCbf/206taa.png',
      link: '/allNews'
    },
    {
      title: 'Notícia 3',
      description: 'Descrição da notícia 3',
      image: 'https://i.ibb.co/Zf2MNgH/Whats-App-Image-2023-05-25-at-17-40-23.jpg',
      link: '/allNews'
    },
   
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={[16, 16]} justify="center">
        {newsData.map((news, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Card
              hoverable
              cover={<img alt={news.title} src={news.image} />}
              bodyStyle={{ padding: '20px' }} 
              style={{ height: '100%' }} 
            >
              <Meta title={news.title} description={news.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NewsComponent;
