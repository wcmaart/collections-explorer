import React, { Component } from 'react'
import styles from './styles.scss';

class MasonryCardImage extends Component {
  render() {

    const {
      url,
      height,
      width,
    } = this.props.imageData || {};

    return <div className={styles.cardImgWrap}>
      <img className={styles.cardImg} src={url} style={{padding: `${100 / (width / height)}% 0 0 0`}} />
    </div>
  }
}

export default MasonryCardImage;
