import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  height: 500,
  color: '#fff'

};
function Carrossel() {
  return (
    <Carousel autoplay>
      <div style={contentStyle}>

        <img src='https://i.ibb.co/w0CdjFv/taa-banner-2.png' />

      </div>
      <div style={contentStyle} >

        <img src='https://i.ibb.co/w0CdjFv/taa-banner-2.png' />

      </div>

    </Carousel>
  )

}
export default Carrossel;




