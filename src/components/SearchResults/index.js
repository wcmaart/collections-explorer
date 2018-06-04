import React, { Component } from 'react';
import styles from './styles.scss';
import ArtObjectCard from '../ArtObjectCard';
import MakerCard from '../MakerCard';
import EventCard from '../EventCard';

class SearchResults extends Component {
  render() {
    const {
      searchResultItems,
      searchType,
    } = this.props

    return (
      <div className={`${styles.searchResultItems} row`}>
        { searchResultItems.map(item => (
            <div key={item.id} className={`col s12 l4`}>
              {
                searchType === 'objects' &&
                <ArtObjectCard {...item} />
              }
              {
                searchType === 'makers' &&
                <MakerCard {...item} />
              }
              {
                searchType === 'events' &&
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
