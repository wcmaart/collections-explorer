import React, { Component } from 'react'
import styles from './styles.scss';

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
          <a href={"#"}><span className={`${styles.cardTitle} card-title`}>{this.props.title}</span></a>
          <ul>
            {
              statListItems.map(statListItem => {
                return statListItem.value && (
                  <li className={styles.statListItem}>
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
