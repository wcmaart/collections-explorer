import React, { Component } from 'react';
import styles from './styles.scss';

const Masonry = require('react-masonry-component');

const masonryOptions = {
  transitionDuration: 0,
};

class MasonryGrid extends Component {
  render() {
    return (
      <div className={`${styles.masonryGrid} masonryGrid `}>
        <Masonry
          className={'component-masonry-grid row'}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
          {this.props.masonryElements}
        </Masonry>
      </div>
    );
  }
}

export default MasonryGrid;
