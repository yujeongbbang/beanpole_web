import React, { useState, useEffect } from 'react';
import styles from '../styles/Page1_3.module.css';

// Props 타입 정의
interface Page1_3Props {
  isActive: boolean;
}

const Page1_3: React.FC<Page1_3Props> = ({ isActive }) => {
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateSubtitle, setAnimateSubtitle] = useState(false);
  
  useEffect(() => {
    if (isActive) {
      setAnimateTitle(false);
      setAnimateSubtitle(false);
      setTimeout(() => {
        setAnimateTitle(true);
      }, 0);
      setTimeout(() => {
        setAnimateSubtitle(true);
      }, 500);
    } else {
      setAnimateTitle(false);
      setAnimateSubtitle(false);
    }
  }, [isActive]);

  return (
    <div className={styles.page3Container}>
      <div className={styles.page3TextContainer}>
        <h1 className={`${styles.page3Title} ${animateTitle ? styles.animateSlideIn : ''}`}>
          GOOD CARE
        </h1>
        <p className={`${styles.page3Subtitle} ${animateSubtitle ? styles.animateSlideIn : ''}`}>
          여행을 위한 패킹&관리법
        </p>
      </div>
    </div>
  );
};

export default Page1_3;
