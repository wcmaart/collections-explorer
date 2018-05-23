import React from 'react';
import styles from './styles.scss';
import { Link } from 'react-router-dom';

// const testImg = `https://picsum.photos/500/500?random`;
const testImg = `/sample-gallery-img.jpg`;

function Home() {
  return (
    <section className={styles.section}>
      <div className={styles.backdrop}>
        <img src={testImg} alt="image alt text" />
      </div>
      <div className={styles.frontdrop}>
        <h1 className={styles.h1} >BRAND Collection</h1>
        <h2 className={styles.h2} >Some words about our collection go here to tell our unique story</h2>
        <div className={styles.buttonsWrap}>
          <Link className={`${styles.btn} btn btn-large`} to="/all/">Enter</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
