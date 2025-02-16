import React, { useState } from 'react';
import Slider from '../components/Slider';

import Page1_1 from './Page1_1';
import Page1_2 from './Page1_2';
import Page1_3 from './Page1_3';
import Page1_4 from './Page1_4';
import Page1_5 from './Page1_5';

import styles from '../styles/Page1.module.css';

const Page1: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0); // 현재 활성화된 페이지 인덱스

  const pages = [
    Page1_1,
    Page1_2,
    Page1_3,
    Page1_4,
    Page1_5,
  ];

  return (
    <div className={styles.page1Container}>
      <Slider>
        {pages.map((Page, index) => (
          <Page key={index} isActive={index === activeIndex} />
        ))}
      </Slider>
    </div>
  );
};

export default Page1;
