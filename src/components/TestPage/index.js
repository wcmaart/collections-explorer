import React from 'react';
import styles from './styles.scss';
import Link from 'react-router/lib/Link';

function TestPage() {
  return (
    <section>
      <h1>Test Page</h1>
      <Link to="/">Home</Link>
    </section>
  );
}

export default TestPage;
