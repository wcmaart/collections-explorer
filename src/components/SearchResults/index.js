import React, { Component } from 'react';
import styles from './styles.scss';
import ArtObjectCard from '../ArtObjectCard';
import MakerCard from '../MakerCard';
import ExhibitionCard from '../ExhibitionCard';
import MasonryGrid from '../MasonryGrid';

class SearchResults extends Component {
  getMasonryElements(elements) {
    const {
      searchCategory,
    } = this.props

    return elements.map(function(item) {
      return (
        <li key={item.id} className="masonryGridItem col s12 l3">
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
        </li>
      );
    });
  }

  render() {
    const {
      searchResultItems,
    } = this.props

    return (
      <MasonryGrid masonryElements={this.getMasonryElements(searchResultItems)} />
    );
  }
}

export default SearchResults;
