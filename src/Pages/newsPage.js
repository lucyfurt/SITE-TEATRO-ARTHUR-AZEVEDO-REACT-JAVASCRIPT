import React from 'react';



const newsData = [
  {
    title: 'Título da Notícia 1',
    content: 'Conteúdo da Notícia 1',
    author: 'Autor da Notícia 1',
    image:   'https://i.ibb.co/pJTrCbf/206taa.png',
    
  },
  {
    title: 'Título da Notícia 2',
    content: 'Conteúdo da Notícia 2',
    author: 'Autor da Notícia 2',
    image: 'https://i.ibb.co/pJTrCbf/206taa.png',
    
  },
  {
    title: 'Título da Notícia 1',
    content: 'Conteúdo da Notícia 1',
    author: 'Autor da Notícia 1',
    image:   'https://i.ibb.co/pJTrCbf/206taa.png',
    
  },
  {
    title: 'Título da Notícia 2',
    content: 'Conteúdo da Notícia 2',
    author: 'Autor da Notícia 2',
    image: 'https://i.ibb.co/pJTrCbf/206taa.png',
    
  },

];

const NewsPage = () => {
  return (
    <div className="news-page">
      <h1>Meu Noticiário</h1>
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
  );
};

export default NewsPage;
