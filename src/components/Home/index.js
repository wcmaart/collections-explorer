import React from 'react';
import styles from './styles.scss';
import Link from 'react-router/lib/Link';

function Home() {

  return (
    <section>
      <h1>Home</h1>
      <Link to="/test-page">Test Page</Link>
    </section>
  );
}

export default Home;
