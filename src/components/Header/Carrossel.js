import React from 'react';
import { Carousel } from 'antd';

function Carrossel() {
  return (
    <Carousel autoplay>
      <div>
        <img
          src='https://i.ibb.co/w0CdjFv/taa-banner-2.png'
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div>
        <img
          src='https://i.ibb.co/w0CdjFv/taa-banner-2.png'
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </Carousel>
  );
}

export default Carrossel;
