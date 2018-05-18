import React from 'react';
import Link from 'react-router/lib/Link';
import styles from './styles.scss';
import NavMenu from '../NavMenu';

function Header() {
  return (
    <section>
      <nav className={styles.banner}>
        <a href="/" className={styles.brandLogo}>BRAND</a>
      </nav>
      <NavMenu/>
    </section>
  );
}

export default Header;
