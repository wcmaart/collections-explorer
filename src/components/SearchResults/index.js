import React, { Component } from 'react';
import styles from './styles.scss';
import ArtObjectCard from '../ArtObjectCard';
import MakerCard from '../MakerCard';
import EventCard from '../EventCard';

class SearchResults extends Component {
  render() {
    const {
      searchResultItems,
      searchCategory,
    } = this.props

    return (
      <div className={`${styles.searchResultItems} row`}>
        { searchResultItems.map(item => (
            <div key={item.id} className={`col s12 l4`}>
              {
                searchCategory === 'objects' &&
                <ArtObjectCard {...item} />
              }
              {
                searchCategory === 'makers' &&
                <MakerCard {...item} />
              }
              {
                searchCategory === 'events' &&
                <EventCard {...item} />
              }
            </div>
          ))
        }
      </div>
    );
  }
}

export default SearchResults;
