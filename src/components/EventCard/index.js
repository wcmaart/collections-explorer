import React, { Component } from 'react'
import styles from './styles.scss';
import { Link } from 'react-router-dom';

class EventCard extends Component {
  render() {
    const testImg = this.props.imageUrl || `https://picsum.photos/500/500?random&${this.props.id}`;

    return (
      <div key={this.props.id} className={`${styles.card} card`}>
        <Link to={`/events/${this.props.id}`}>
          <div className="card-image">
            <img src={testImg} />
          </div>
          <div className={styles.cardTitle}>
            <span>
              Fake Event Name
            </span>
          </div>
        </Link>
      </div>
    );
  }
}

export default EventCard;
