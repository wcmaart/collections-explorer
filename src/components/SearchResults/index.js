import React, { Component } from 'react';
import styles from './styles.scss';
import ArtObjectCard from '../ArtObjectCard';
import MakerCard from '../MakerCard';
import ExhibitionCard from '../ExhibitionCard';
import EventCard from '../EventCard';
import MasonryGrid from '../MasonryGrid';

class SearchResults extends Component {
  getMasonryElements(elements) {
    const {
      searchCategory,
    } = this.props

    return elements.map(function(item) {
      let id = item.id;

      // todo: improve this #apiEventId
      // quick fix for now
      if (typeof id === 'undefined') {
        id = item.eventId;
      }

      return (
        <li key={id} className="masonryGridItem col s12 l3">
          {
            searchCategory === 'objects' &&
            <ArtObjectCard {...item} />
          }
          {
            searchCategory === 'makers' &&
            <MakerCard {...item} />
          }
          {
            searchCategory === 'exhibitions' &&
            <ExhibitionCard {...item} />
          }
          {
            searchCategory === 'events' &&
            <EventCard {...item} />
          }
        </li>
      );
    });
  }

  render() {
    const {
      searchResultItems,
    } = this.props

    if (searchResultItems.length) {
      return <MasonryGrid masonryElements={this.getMasonryElements(searchResultItems)} />
    }

    return <div>Sorry, no Results.</div>
  }
}

export default SearchResults;
