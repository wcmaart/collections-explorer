import React, { Component } from 'react'
import styles from './styles.scss';
import { Link } from 'react-router-dom';

class MakerCard extends Component {
  render() {
    // const testImg = this.props.imageUrl || `https://picsum.photos/500/500?random&${this.props.id}`;
    const testImg = this.props.imageUrl || '/no-image-placeholder-big.png';

    const cardContent = (
      <div className={`${styles.cardContent} cardContent`}>
        <div className={styles.cardTitle}>
          <span>
            {this.props.title}
          </span>
        </div>
      </div>
    );

    const cardImage = (
      <div className="card-image">
        <img src={testImg} />
      </div>
    );
    return (
      <div key={this.props.id} className={`${styles.card} card`}>
        <Link to={`/makers/${this.props.id}`}>
          {cardImage}
          {cardContent}
        </Link>
      </div>
    );
  }
}

export default MakerCard;
