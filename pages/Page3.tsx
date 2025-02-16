import React from 'react';
import styles from '../styles/Page3.module.css';

interface PageProps {
  isActive: boolean;
}

const Page3: React.FC<PageProps> = ({ isActive }) => {
  return (
    <div className={`${styles.page3Container} ${isActive ? styles.active : ''}`}>
      <div className={styles.page3TextContainer}>
        <h1 className={styles.page3Title}>BRAND</h1>
        <p className={styles.page3Subtitle}>
          시대를 아우르는 클래식, <br />타임리스 캐주얼 웨어
        </p>
        <div className={styles.page3Category}>
          <span className={styles.page3CateList}>MEN</span>
          <span className={styles.page3CateList}>LADIES</span>
          <span className={styles.page3CateList}>KIDS</span>
        </div>
        <div className={styles.page3Category}>
          <span className={styles.page3CateList}>ACCESSORY</span>
          <span className={styles.page3CateList}>GOLF</span>
        </div>
      </div>
    </div>
  );
};

export default Page3;
