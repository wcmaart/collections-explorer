import React from 'react';
import styles from './styles.scss';
// import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className={styles.section}>
      <h1>Home</h1>
      <ul className="collection">
        <li className="collection-item">
          <Link className={styles.link} to="/art-objects">
            Art Objects
          </Link>
        </li>
        <li className="collection-item">
          <Link className={styles.link} to="/people">
            People
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Home;
