import React, { Component } from 'react';
import styles from './styles.scss';
import ArtObjectCard from '../ArtObjectCard';
import MakerCard from '../MakerCard';
import EventCard from '../EventCard';

class SearchResults extends Component {
  render() {
    // todo: change objects to searchData to avoid confusion.
    const {
      objects,
      searchType,
    } = this.props

    return (
      <div className={`${styles.artObjects} row`}>
        { objects.map(obj => (
            <div key={obj.id} className={`col s12 l4`}>
              {
                searchType === 'objects' &&
                <ArtObjectCard {...obj} />
              }
              {
                searchType === 'makers' &&
                <MakerCard {...obj} />
              }
              {
                searchType === 'events' &&
                <EventCard {...obj} />
              }
            </div>
          ))
        }
      </div>
    );
  }
}

export default SearchResults;
