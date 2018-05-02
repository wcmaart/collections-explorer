import React, { Component } from 'react'
import styles from './styles.scss';

// todo: #consolidateCards
class PersonCard extends Component {
  render() {
    const testImg = this.props.img || `https://picsum.photos/500/500?random&${this.props.id}`;
    const statListItems = [
      {
        label: 'Name',
        value: this.props.name,
      },
      {
        label: 'Born',
        value: this.props.born,
      },
      {
        label: 'Died',
        value: this.props.died,
      },
      {
        label: 'On View',
        value: this.props.onView,
      },
      {
        label: 'Periods',
        value: this.props.periods,
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

export default PersonCard;
