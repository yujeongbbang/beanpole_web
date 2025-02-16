import React, { useState, ReactElement, ReactNode } from 'react';
import styles from '../styles/Slider.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Props 타입 정의
interface SliderProps {
  children: ReactElement[]; // ReactElement 배열로 변경
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const [currentSection, setCurrentSection] = useState<number>(0);

  const goToSection = (index: number) => {
    if (index >= 0 && index < children.length) {
      setCurrentSection(index);
    }
  };

  const handlePrev = () => {
    goToSection(currentSection - 1);
  };

  const handleNext = () => {
    goToSection(currentSection + 1);
  };

  return (
    <div className={styles.sliderContainer}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`${styles.sliderSection} ${currentSection === index ? styles.activeSection : ''}`}
          style={{
            transform: `translateX(${(index - currentSection) * 100}%)`,
            opacity: currentSection === index ? 1 : 0,
            transition: 'transform 1s ease-in-out, opacity 1s ease-in-out',
          }}
        >
          {React.cloneElement(child, { isActive: currentSection === index } as Partial<typeof child.props>)}
        </div>
      ))}

      <div className={styles.sliderControls}>
        <button onClick={handlePrev} disabled={currentSection === 0}>
          <FiChevronLeft />
        </button>
        <button onClick={handleNext} disabled={currentSection === children.length - 1}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
