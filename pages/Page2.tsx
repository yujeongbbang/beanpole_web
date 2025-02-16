import React from 'react';
import styles from '../styles/Page2.module.css';

interface PageProps {
  isActive: boolean;
}

const Page2: React.FC<PageProps> = ({ isActive }) => {
  return (
    <div className={`${styles.page2Container} ${isActive ? styles.active : ''}`}>
      <div className={styles.page2TextContainer}>
        <h1 className={styles.page2Title}>HERITAGE</h1>
        <p className={styles.page2Subtitle}>
          빈폴이 가진 오랜 역사,<br />그리고 변함없는 빈폴의 가치
        </p>
        <div className={styles.page2Category}>
          <span className={styles.page2CateList}>HISTORY</span>
          <span className={styles.page2CateList}>PHILOSOPHY</span>
          <span className={styles.page2CateList}>THE ESSENTIAL</span>
        </div>
      </div>
    </div>
  );
};

export default Page2;
