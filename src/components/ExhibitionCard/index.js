import React, { Component } from 'react'
import moment from 'moment';
import styles from './styles.scss';
import { Link } from 'react-router-dom';
import { parseExhibitionProps } from '../../helpers';

// todo: #consolidateCards ?
class ExhibitionCard extends Component {
  getDateValue() {
    // todo: #normalizeDateFormats?
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
    const props = parseExhibitionProps(this.props);

    const {
      isSingleCard,
    } = props;

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

    const imgUrl = props.imageData && props.imageData.url || '/no-image-placeholder-big.png';
    const cardImage = (
      <div className="card-image">
        {
          isSingleCard && <img src={imgUrl} />
        }
        {
          !isSingleCard &&
          <Link to={`/exhibitions/${props.id}`}>
            <div className={styles.cardImgWrap} >
              <img className={styles.cardImg} src={imgUrl} padding={`${100 / (props.imageData.width / props.imageData.height)}% 0 0 0`} />
            </div>
          </Link>
        }
      </div>
    );

    const cardContent = (
      <div className={`${styles.cardContent} cardContent`}>
        <div className={`${styles.cardContentInner} cardContentInner`}>
          <div className={styles.cardTitle}>
            {
              isSingleCard && props.title
            }
            {
              !isSingleCard &&
              <Link to={`/exhibitions/${props.id}`}>
                {props.title}
              </Link>
            }
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
        {cardImage}
        {cardContent}
      </div>
    );
  }
}

export default ExhibitionCard;
