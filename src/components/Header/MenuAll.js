import React, { useEffect, useState } from 'react';
import MenuBurger from './MenuBurguer'
import MenuTest from './MenuTest';

const MenuAll = () => {
  const [isScreenSmaller, setIsScreenSmaller] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsScreenSmaller(window.innerWidth <= 768);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <div>
      {isScreenSmaller ? (
        <MenuBurger />
      ) : (
        <div>
          <MenuTest />
        </div>
      )}
    </div>
  );
};

export default MenuAll;
