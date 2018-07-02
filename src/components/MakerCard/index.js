import React, { Component } from 'react'
import styles from './styles.scss';
import { Link } from 'react-router-dom';
import { parseMakerProps } from '../../helpers';
import MasonryCardImage from '../MasonryCardImage';

class MakerCard extends Component {
  render() {
    const props = parseMakerProps(this.props);
    const cardContent = (
      <div className={`${styles.cardContent} cardContent`}>
        <div className={`${styles.cardContentInner} cardContentInner`}>
          <div className={styles.cardTitle}>
            <span>
              {props.title}
            </span>
          </div>
        </div>
      </div>
    );

    const cardImage = (
      <div className="card-image">
        <MasonryCardImage imageData={props.imageData} />
      </div>
    );

    return (
      <div key={props.id} className={`${styles.card} card`}>
        <Link to={`/makers/${props.id}`}>
          {cardImage}
          {cardContent}
        </Link>
      </div>
    );
  }
}

export default MakerCard;
