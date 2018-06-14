import React, { Component } from 'react'
import styles from './styles.scss';
import { Link } from 'react-router-dom';
import { parseMakerProps } from '../../helpers';

class MakerCard extends Component {
  render() {
    const props = parseMakerProps(this.props);

    // const testImg = props.imageUrl || `https://picsum.photos/500/500?random&${props.id}`;
    const testImg = props.imageUrl || '/no-image-placeholder-big.png';

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
        <img src={testImg} />
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
