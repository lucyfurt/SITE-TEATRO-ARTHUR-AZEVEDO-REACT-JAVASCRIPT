import React from 'react';
import { Carousel } from 'antd';

function Carrossel() {
  const isSmallScreen = window.innerWidth < 768; // Adjust the breakpoint as needed

  return (
    <Carousel autoplay>
      {/* Slide 1 */}
      <div>
        <img
          src='https://i.ibb.co/0VFYkCT/cortina.png'
          style={{ width: '100%', height: isSmallScreen ? 'auto' : '700px' }}
        />
      </div>

      {/* Slide 2 */}
      <div>
        <img
          src='https://i.ibb.co/xs1YHnM/lustre.png'
          style={{ width: '100%', height: isSmallScreen ? 'auto' : '700px' }}
        />
      </div>
      {/* Slide 3 */}
      <div>
        <img
          src='https://i.ibb.co/qkKQXzj/cabines.png'
          style={{ width: '100%', height: isSmallScreen ? 'auto' : '700px' }}
        />
      </div>
       {/* Slide 4 */}
       <div>
        <img
          src='https://i.ibb.co/5s0FdLN/corredor.png'
          style={{ width: '100%', height: isSmallScreen ? 'auto' : '700px' }}
        />
      </div>
       {/* Slide 5 */}
       <div>
        <img
          src='https://i.ibb.co/3pMd28p/camarote-oficial.png'
          style={{ width: '100%', height: isSmallScreen ? 'auto' : '700px' }}
        />
      </div>
    </Carousel>
  );
}

export default Carrossel;
