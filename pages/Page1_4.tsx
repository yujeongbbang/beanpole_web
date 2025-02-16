import React from 'react';
import styles from '../styles/Page1_4.module.css';

// Props 타입 정의
interface Page1_4Props {
  isActive: boolean;
}

const Page1_4: React.FC<Page1_4Props> = ({ isActive }) => {
  return (
    <div className={styles.page4Container}>
      <div className={styles.page4TextContainer}>
        {isActive && <p className={styles.activeText}>Page 1-4 is Active</p>}
      </div>
    </div>
  );
};

export default Page1_4;
