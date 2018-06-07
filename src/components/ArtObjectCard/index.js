import React, { Component } from 'react'
import styles from './styles.scss';
import { Link } from 'react-router-dom';
import { parseObjectProps } from '../../helpers';

class ArtObjectCard extends Component {
  render() {
    const props = parseObjectProps(this.props);

    const {
      isSingleCard,
    } = props;

    const testImg = props.imageUrl || `https://picsum.photos/500/500?random&${props.id}`;
    const statListItems = [
      {
        label: 'Medium',
        value: props.medium,

      },
      {
        label: 'Maker',
        value: props.maker,

      },
      {
        label: 'Dimensions',
        value: props.dimensions,

      },
      {
        label: 'People',
        value: props.people,

      },
      {
        label: 'Creditline',
        value: props.creditline,
      },
    ];

    const cardContent = (
      <div className={`${styles.cardContent} cardContent`}>
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
    );

    const cardImage = (
      <div className="card-image">
        <img src={testImg} />
      </div>
    );

    return (
      <div key={props.id} className={`${styles.card} card`}>
        {
          isSingleCard &&
          <div className={styles.cardSingle}>
            {cardContent}
            {cardImage}
          </div>
        }
        {
          !isSingleCard &&
          <Link to={`/objects/${props.id}`}>
            {cardImage}
            {cardContent}
          </Link>
        }
      </div>
    );
  }
}

export default ArtObjectCard;
