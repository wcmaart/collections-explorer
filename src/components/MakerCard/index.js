import React, { Component } from 'react'
import styles from './styles.scss';
import { Link } from 'react-router-dom';

class MakerCard extends Component {
  render() {
    const testImg = this.props.imgUrl || `https://picsum.photos/500/500?random&${this.props.id}`;

    return (
      <div key={this.props.id} className={`${styles.card} card`}>
        <div className="card-image">
          <img src={testImg} />
        </div>
        <div>
          <Link className={styles.cardTitle} to={`/makers/${this.props.id}`}>
            <span>
              Fake Name
            </span>
          </Link>
        </div>
      </div>
    );
  }
}

export default MakerCard;
