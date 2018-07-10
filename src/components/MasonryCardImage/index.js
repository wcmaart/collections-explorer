import React, { Component } from 'react';
import styles from './styles.scss';

class MasonryCardImage extends Component {
  render() {
    const { url, height, width } = this.props.imageData || {};

    return (
      <div className={styles.cardImgWrap} style={{ paddingTop: `${100 / (width / height)}%` }}>
        <span className={styles.cardImg}>
          <img src={url} />
        </span>
      </div>
    );
  }
}

export default MasonryCardImage;
