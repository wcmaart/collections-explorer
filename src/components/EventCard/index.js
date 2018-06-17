import React, { Component } from 'react'
import moment from 'moment';
import styles from './styles.scss';
import { Link } from 'react-router-dom';
import { parseEventProps } from '../../helpers';

class EventCard extends Component {
  getDateValue() {
    const {
      beginISODate,
      endISODate,
    } = this.props;

    const start = beginISODate && moment(beginISODate).format('l');
    const end = endISODate && moment(endISODate).format('l');

    // const start = beginISODate;
    // const end = endISODate;
    if (!end || (end === start)) {
      return start;
    }

    return `${start} - ${end}`;
  }

  render() {
    const props = parseEventProps(this.props);

    const statListItems = [
      {
        label: 'Date',
        value: this.getDateValue(),
      },
      {
        label: 'Is In House',
        value: props.isInHouse ? 'yes' : 'no',
      }
    ];

    const imgUrl = props.imageUrl || '/no-image-placeholder-big.png';
    const cardImage = (
      <div className="card-image">
        <img src={imgUrl} />
      </div>
    );

    const cardContent = (
      <div className={`${styles.cardContent} cardContent`}>
        <div className={`${styles.cardContentInner} cardContentInner`}>
          <div className={styles.cardTitle}>
            {props.title}
          </div>
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

    return (
      <div key={props.id} className={`${styles.card} card`}>
        <Link to={`/events/${props.id}`}>
          {cardImage}
          {cardContent}
        </Link>
      </div>
    );
  }
}

export default EventCard;
