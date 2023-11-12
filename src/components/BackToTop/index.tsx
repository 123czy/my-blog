import s from './index.scss'
import React, { useState, useEffect } from 'react';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
const BackToTop : React.FC = () => {
   const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={s.backTop}>
    {showButton && (
      <div className={s.backButton} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <VerticalAlignTopOutlined />
      </div>
    )}
  </div> 
  )
}

export default BackToTop;
