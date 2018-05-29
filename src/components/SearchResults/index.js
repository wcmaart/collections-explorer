import React, { Component } from 'react';
import styles from './styles.scss';
import ArtObjectCard from '../ArtObjectCard';

class SearchResults extends Component {
  render() {
    const objects = this.props.objects;

    return (
      <div className={`${styles.artObjects} row`}>
        { objects.map(obj => (
            <div key={obj.id} className={`col s12 l4`}>
              <ArtObjectCard {...obj} />
            </div>
          ))
        }
      </div>
    );
  }
}

export default SearchResults;
