import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import NavMenu from '../NavMenu';

function Header() {
  return (
    <section>
      <nav className={styles.banner}>
        <div className="container">
          <a href="/" className={styles.brandLogo}>
            WCMA
          </a>
        </div>
      </nav>
      <NavMenu />
    </section>
  );
}

export default Header;
