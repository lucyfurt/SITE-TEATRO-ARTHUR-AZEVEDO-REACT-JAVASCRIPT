import { Card, Row, Col } from 'antd';
import '../Content/css/CardNews.css'
const { Meta } = Card;

const CardNews = () => {
  const newsData = [
    {
      title: ' Ciclo de Formação em Artes Cênicas no Teatro Arthur Azevedo: Uma experiência inesquecível!',
      description: 'O Ciclo de Formação em Artes Cênicas no Teatro Arthur Azevedo foi uma experiência transformadora. Através de workshops intensivos, práticas de cena e um ambiente acolhedor, foram exploradas diferentes técnicas e gêneros teatrais',
      image: 'https://i.ibb.co/y6BjDVk/Whats-App-Image-2023-05-25-at-17-40-32.jpg',
      link: '/allNews'

    },
    {
      title: 'Celebração dos 206 Anos do Teatro Arthur Azevedo: Uma história de arte e cultura! ',
      description: 'Na semana de comemoração ao aniversário de 206 anos do Teatro Arthur Azevedo, uma atmosfera vibrante tomou conta do local. O teatro foi palco de várias experências emocionantes, encantando o público com visitações, performance teatral, shows. Destacando a importância do Teatro Arthur Azevedo como um ícone da cultura e da arte.',
      image: 'https://i.ibb.co/pJTrCbf/206taa.png',
      link: '/allNews'
    },
    {
      title: 'Teatro Arthur Azevedo inaugura Núcleo de Memória e Pesquisa: preservando a história e impulsionando a criação artística! ',
      description: 'O Teatro Arthur Azevedo inaugurou seu Núcleo de Memória e Pesquisa, um espaço dedicado à preservação e estudo da história teatral. Com um acervo rico em documentos e registros audiovisuais, o núcleo busca resgatar memórias, estimular pesquisas e inspirar novas criações artísticas. Além disso, promoverá atividades como palestras e exposições, fortalecendo o compromisso do teatro em preservar a cultura e valorizar sua importância como agente transformador na sociedade.',
      image: 'https://i.ibb.co/Zf2MNgH/Whats-App-Image-2023-05-25-at-17-40-23.jpg',
      link: '/allNews'
    },

  ];

  return (
    <>
    <div>
      <Row gutter={[16, 16]} justify="center">
        {newsData.map((news, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Card
              hoverable
              cover={<img alt={news.title} src={news.image} />}
              style={{ height: '100%' }}
            >
              <Meta title={news.title} description={news.description} />
            </Card>
          </Col>
        ))}
      </Row>        
    </div>
    <div className='link'>
      <a href='/allNews'>Mais Notícias</a>
    </div>
    </>
  );
}
export default CardNews;
