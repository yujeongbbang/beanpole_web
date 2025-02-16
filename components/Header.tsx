import React, { useState } from 'react';
import styles from '../styles/Header1.module.css';
import HeritageSubMenu from './Submenu/Heritage';
import BrandsSubMenu from './Submenu/Brands';
import JournalSubMenu from './Submenu/Journal';
import GoodActivitySubMenu from './Submenu/GoodActivity';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>BEANPOLE</span>
      </div>
      <nav
        className={styles.nav}
        onMouseEnter={() => setActiveMenu('all')}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <ul>
          <li>
            <a href="#">HERITAGE</a>
            {(activeMenu === 'heritage' || activeMenu === 'all') && (
              <div className={styles.submenu}>
                <HeritageSubMenu />
              </div>
            )}
          </li>
          <li>
            <a href="#">BRANDS</a>
            {(activeMenu === 'brands' || activeMenu === 'all') && (
              <div className={styles.submenu}>
                <BrandsSubMenu />
              </div>
            )}
          </li>
          <li>
            <a href="#">JOURNAL</a>
            {(activeMenu === 'journal' || activeMenu === 'all') && (
              <div className={styles.submenu}>
                <JournalSubMenu />
              </div>
            )}
          </li>
          <li>
            <a href="#">GOOD ACTIVITY</a>
            {(activeMenu === 'good-activity' || activeMenu === 'all') && (
              <div className={styles.submenu}>
                <GoodActivitySubMenu />
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
