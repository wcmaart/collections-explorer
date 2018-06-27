import React, { Component } from 'react'
import styles from './styles.scss';
import { Link } from 'react-router-dom';
import { parseObjectProps } from '../../helpers';

// todo: #consolidateCards ?
class ArtObjectCard extends Component {
  render() {
    const props = parseObjectProps(this.props);

    const {
      isSingleCard,
      maker,
      medium,
    } = props;

    // const imgUrl = props.imageUrl || `https://picsum.photos/500/500?random&${props.id}`;
    const imgUrl = props.imageUrl || '/no-image-placeholder-big.png';
    const statListItems = [
      {
        label: 'Medium',
        value: <Link to={`/mediums/${medium}`}>
          {medium}
        </Link>,
      },
      {
        label: 'Maker',
        value: <Link to={`/makers/${maker}`}>
          {maker}
        </Link>,
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
        <div className={`${styles.cardContentInner} cardContentInner`}>
          <div className={styles.cardTitle}>
            {
              isSingleCard && props.title
            }
            {
              !isSingleCard &&
              <Link to={`/objects/${props.id}`}>
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

    const cardImage = (
      <div className="card-image">
        {
          isSingleCard && <img src={imgUrl} />
        }
        {
          !isSingleCard &&
          <Link to={`/objects/${props.id}`}>
            <img src={imgUrl} />
          </Link>
        }
      </div>
    );

    return (
      <div key={props.id} className={`${styles.card} ${isSingleCard ? styles.cardSingle : ''} card`}>
        {
          isSingleCard &&
          <div>
            {cardContent}
            {cardImage}
          </div>
        }
        {
          !isSingleCard &&
          <div>
            {cardImage}
            {cardContent}
          </div>
        }
      </div>
    );
  }
}

export default ArtObjectCard;
