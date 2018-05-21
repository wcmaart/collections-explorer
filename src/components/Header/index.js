import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

function Header() {
  return (
    <section>
      <nav className={styles.comp}>
        <a href="/" className={styles.brandLogo}>
          BRAND
        </a>
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/art-objects">
              Art Objects
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/people">
              People
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
