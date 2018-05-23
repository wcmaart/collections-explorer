import React, { Component } from 'react'
import styles from './styles.scss';
import { Link } from 'react-router-dom';

// todo: #consolidateCards
class ArtObjectCard extends Component {
  render() {
    const testImg = this.props.imgUrl || `https://picsum.photos/500/500?random&${this.props.id}`;
    const statListItems = [
      {
        label: 'Title',
        value: this.props.title,

      },
      {
        label: 'Medium',
        value: this.props.medium,

      },
      {
        label: 'Maker',
        value: this.props.maker,

      },
      {
        label: 'Dimensions',
        value: this.props.dimensions,

      },
      {
        label: 'People',
        value: this.props.people,

      },
      {
        label: 'Creditline',
        value: this.props.creditline,

      },
    ];

    return (
      <div key={this.props.id} className={`${styles.card} card`}>
        <div className="card-image">
          <img src={testImg} />
        </div>
        <div className="card-content">
          <Link className={styles.link} to={`/art-objects/${this.props.id}`}>
            <span className={`${styles.cardTitle} card-title`}>{this.props.title}</span>
          </Link>
          <ul>
            {
              statListItems.map(statListItem => {
                return statListItem.value && (
                  <li className={styles.statListItem} key={statListItem.label}>
                    <span className={styles.statLabel}>{statListItem.label}</span>
                    <span className={styles.colon}>: </span>
                    <span className={styles.statValue}>{statListItem.value}</span>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default ArtObjectCard;
