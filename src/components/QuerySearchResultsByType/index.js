import React, { Component } from 'react';
import styles from './styles.scss';
import GraphqlClient from '../../GraphqlClient';
import SearchResultsByMedium from '../SearchResultsByMedium';
import SearchResultsByAlphabetical from '../SearchResultsByAlphabetical';
import { withRouter } from 'react-router';
import { Link, Route } from 'react-router-dom';
import { OBJECT_MEDIUMS, ALPHABET } from '../../constants';

class QuerySearchResultsByType extends Component {
  constructor(props) {
    super(props);

    const client = GraphqlClient();

    const {
      searchType,
      gqlQueries,
    } = this.props;

    this.state = {
      searchResultItems: null,
    };

    // quick test for now.
    const gqlQueryKey = searchType === 'medium' ?
      'byMedium' :
      searchType === 'alphabetical' ?
      'byAlphabetical' :
       null;

    if (!gqlQueryKey) {
      return null;
    }

    // get the correct gqlQuery
    const gqlQuery = gqlQueries[gqlQueryKey];
    const searchResultItems = [];

    if(searchType === 'medium' ) {
      OBJECT_MEDIUMS.map(type => {

        client
          .query({
            query: gqlQuery,
            variables: {
              medium: type.key,
            }
          })
          .then(response => {
            const {
              data
            } = response;

            searchResultItems.push({
              key: type.key,
              content: type.content,
              objects: data.objects,
            });

            this.setState({searchResultItems: searchResultItems});
          });
      });
    }

    if(searchType === 'alphabetical' ) {
      client
        .query({
          query: gqlQuery,
        })
        .then(response => {
          const {
            data
          } = response;

          if (!data.objects) {
            return;
          }

          ALPHABET.map(letter => {
            const titlesByThisLetter = data.objects.filter(
              obj => (obj.title.toLocaleUpperCase().startsWith(letter))
            );

            searchResultItems.push({
              key: letter.toLocaleLowerCase(),
              content: letter,
              objects: titlesByThisLetter,
            });
          });

          this.setState({searchResultItems: searchResultItems});
        });
    }
  }

  render() {
    const props = this.props;

    const {
      searchResultItems,
    } = this.state;

    if (!searchResultItems) {
      return null;
    }

    const mergedParams = Object.assign({}, props, {
      searchResultItems,
    });

    return (
      <div>
        { this.props.searchType === 'medium' &&
          <SearchResultsByMedium {...mergedParams} />
        }
        { this.props.searchType === 'alphabetical' &&
          <SearchResultsByAlphabetical {...mergedParams} />
        }
      </div>
    )
  }
}

export default withRouter(QuerySearchResultsByType);
