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

        <img src='' />

      </div>
      <div style={contentStyle} >

        <img src='' />

      </div>

    </Carousel>
  )

}
export default Carrossel;




