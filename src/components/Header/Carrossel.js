import React from 'react';
import { Carousel } from 'antd';

function Carrossel() {
  const isSmallScreen = window.innerWidth < 768; // Adjust the breakpoint as needed

  return (
    <Carousel autoplay>
      {/* Slide 1 */}
      <div>
        <img
          src='https://i.ibb.co/XLHVTWB/0005.png'
          style={{ width: '100%', height: isSmallScreen ? 'auto' : '700px' }}
        />
      </div>

      {/* Slide 2 */}
      <div>
        <img
          src='https://i.ibb.co/LCkKg7M/0004.png'
          style={{ width: '100%', height: isSmallScreen ? 'auto' : '700px' }}
        />
      </div>
      {/* Slide 3 */}
      <div>
        <img
          src='https://i.ibb.co/wL61HpC/0003.png'
          style={{ width: '100%', height: isSmallScreen ? 'auto' : '700px' }}
        />
      </div>
       {/* Slide 4 */}
       <div>
        <img
          src='https://i.ibb.co/KmQXytP/0002.png'
          style={{ width: '100%', height: isSmallScreen ? 'auto' : '700px' }}
        />
      </div>
       {/* Slide 5 */}
       <div>
        <img
          src='https://i.ibb.co/yqz8DqH/0001.png'
          style={{ width: '100%', height: isSmallScreen ? 'auto' : '700px' }}
        />
      </div>
    </Carousel>
  );
}

export default Carrossel;
