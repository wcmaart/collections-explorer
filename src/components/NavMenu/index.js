import React from 'react';
import Link from 'react-router/lib/Link';
import styles from './styles.scss';

function NavMenu() {
  return (
    <div className="container">
      <ul className={styles.navMenu}>
        <li className={styles.navItem}>
          <Link className={styles.link} to="/search">
            Search the Collection
          </Link>
        </li>
        <li className={`${styles.navItem} ${styles.navItemRight}`}>
          <Link className={styles.link} to="/explore">
            Explore the Collection
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
