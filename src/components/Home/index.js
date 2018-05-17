import React from 'react';
import styles from './styles.scss';
import Link from 'react-router/lib/Link';
import Header from '../Header';

function Home() {

  return (
    <section className={styles.section}>
      <Header />
      <div className="container">
        <h1>Home</h1>
      </div>
    </section>
  );
}

export default Home;
