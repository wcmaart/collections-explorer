import React from 'react';
import Link from 'react-router/lib/Link';
import styles from './styles.scss';

function Header() {
  return (
    <section>
      <nav className="comp-nav-main nav-extended color-primary">
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/test-page">
              TestPage
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
