import React, { Component } from 'react';
import moment from 'moment';
import styles from './styles.scss';
import { Link } from 'react-router-dom';
import { parseEventProps } from '../../helpers';
import MasonryCardImage from '../MasonryCardImage';

// todo: #consolidateCards ?
class EventCard extends Component {
  getDateValue() {
    // todo: #normalizeDateFormats?
    const { startDate } = this.props;

    const start = startDate && moment(startDate).format('l');

    return start;
  }

  render() {
    const props = parseEventProps(this.props);

    const { isSingleCard } = props;

    // todo: #dedupEventStatListItems
    const statListItems = [
      {
        label: 'Date',
        value: this.getDateValue(),
      },
      {
        label: 'Faculty Member',
        value: props.facultyMember,
      },
      {
        label: 'Subject And Course',
        value: props.subjectAndCourse,
      },
      {
        label: 'Subject',
        value: props.subject,
      },
      {
        label: 'Institution',
        value: props.institution,
      },
    ];

    const imgUrl = props.imageData && props.imageData.url || '/no-image-placeholder-big.png';
    const cardImage = (
      <div className="card-image">
        {isSingleCard && <img src={imgUrl} />}
        {!isSingleCard &&
          <Link to={`/events/${props.id}`}>
            <MasonryCardImage imageData={props.imageData} />
          </Link>
        }
      </div>
    );

    const cardContent = (
      <div className={`${styles.cardContent} cardContent`}>
        <div className={`${styles.cardContentInner} cardContentInner`}>
          <div className={styles.cardTitle}>
            {isSingleCard && props.title}
            {!isSingleCard &&
              <Link to={`/events/${props.id}`}>
                {props.title}
              </Link>}
          </div>
          <ul>
            {statListItems.map(
              statListItem =>
                statListItem.value &&
                <li className={styles.statListItem} key={statListItem.label}>
                  <span className={styles.statLabel}>
                    {statListItem.label}
                  </span>
                  <span className={styles.colon}>: </span>
                  <span className={styles.statValue}>
                    {statListItem.value}
                  </span>
                </li>
            )}
          </ul>
        </div>
      </div>
    );

    return (
      <div key={props.id} className={`${styles.card} card`}>
        {cardImage}
        {cardContent}
      </div>
    );
  }
}

export default EventCard;
