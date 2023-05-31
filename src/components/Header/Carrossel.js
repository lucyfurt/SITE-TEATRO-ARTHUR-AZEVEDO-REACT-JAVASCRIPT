import React from 'react';
import { Carousel } from 'antd';

function Carrossel() {
  const isSmallScreen = window.innerWidth < 768; // Adjust the breakpoint as needed

  return (
    <Carousel autoplay>
      {/* Slide 1 */}
      <div>
        <img
          src='https://i.ibb.co/164fGX8/Boca-de-Cena.jpg'
          style={{ width: '100%', height: isSmallScreen ? 'auto' : '700px' }}
        />
      </div>

      {/* Slide 2 */}
      <div>
        <img
          src='https://i.ibb.co/w6HgK0n/Corredor.jpg'
          style={{ width: '100%', height: isSmallScreen ? 'auto' : '700px' }}
        />
      </div>
      {/* Slide 3 */}
      <div>
        <img
          src='https://i.ibb.co/6vqhkt3/Plat-ia-2.jpg'
          style={{ width: '100%', height: isSmallScreen ? 'auto' : '700px' }}
        />
      </div>
       {/* Slide 4 */}
       <div>
        <img
          src='https://i.ibb.co/F0shzb0/Sal-o-Nobre-4.jpg'
          style={{ width: '100%', height: isSmallScreen ? 'auto' : '700px' }}
        />
      </div>
      
    </Carousel>
  );
}

export default Carrossel;
