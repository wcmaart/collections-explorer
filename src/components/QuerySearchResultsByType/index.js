import React, { Component } from 'react';
import styles from './styles.scss';
import GraphqlClient from '../../GraphqlClient';
import SearchResultsWrapper from '../SearchResultsWrapper';
import SearchResultsByMedium from '../SearchResultsByMedium';
import SearchResultsByAlphabetical from '../SearchResultsByAlphabetical';
import { withRouter } from 'react-router';
import { Link, Route } from 'react-router-dom';
import { OBJECT_MEDIUMS, ALPHABET } from '../../constants';
import { getNormalizedDataResponse } from '../../helpers';
import { parseMakerProps } from '../../helpers';

class QuerySearchResultsByType extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResultItems: null,
    };
  }

  initQuery(nextProps) {
    const props = nextProps || this.props;

    const client = GraphqlClient();
    let searchResultItems = [];

    const { searchType, gqlQueries, searchCategory } = this.props;

    this.state = {
      searchResultItems: null,
    };

    // quick test for now.
    const gqlQueryKey =
      searchType === 'medium'
        ? 'byMedium'
        : searchType === 'alphabetical' ? 'byAlphabetical' : null;
    if (!gqlQueryKey) {
      return null;
    }

    // get the correct gqlQuery
    const gqlQuery = gqlQueries[gqlQueryKey];

    if(searchType === 'keyword') {
      client
        .query({
          query: gqlQuery,
          variables: {
            keyword: thingId,
          }
        })
        .then(response => {
          const {
            data
          } = response;

          searchResultItems = getNormalizedDataResponse(data);

          this.setState({searchResultItems: searchResultItems});
        });
    }

    if (searchType === 'medium') {
      OBJECT_MEDIUMS.map(type => {
        client
          .query({
            query: gqlQuery,
            variables: {
              medium: type.key,
            },
          })
          .then(response => {
            const { data } = response;

            searchResultItems.push({
              key: type.key,
              content: type.content,
              objects: data.objects,
            });

            this.setState({ searchResultItems });
          });
      });
    }

    if (searchType === 'alphabetical') {
      client
        .query({
          query: gqlQuery,
        })
        .then(response => {
          const { data } = response;

          let results = getNormalizedDataResponse(data);

          // temp fix for api
          if (searchCategory === 'makers') {
            results = results.map(parseMakerProps);
          }

          if (!results) {
            return;
          }

          ALPHABET.map(letter => {
            const titlesByThisLetter = results.filter(obj =>
              obj.title.toLocaleUpperCase().startsWith(letter)
            );

            searchResultItems.push({
              key: letter.toLocaleLowerCase(),
              content: letter,
              objects: titlesByThisLetter,
            });
          });

          this.setState({ searchResultItems });
        });
    }
  }

  componentDidMount() {
    this.initQuery();
  }

  componentWillReceiveProps(nextProps) {
    this.initQuery(nextProps);
  }

  render() {
    const props = this.props;

    const { searchResultItems } = this.state;

    if (!searchResultItems) {
      return null;
    }

    const mergedParams = Object.assign({}, props, {
      searchResultItems,
    });

    return (
      <div>
        { this.props.searchType === 'keyword' &&
          <SearchResultsWrapper {...mergedParams} />
        }
        { this.props.searchType === 'medium' &&
          <SearchResultsByMedium {...mergedParams} />
        }
        { this.props.searchType === 'alphabetical' &&
          <SearchResultsByAlphabetical {...mergedParams} />
        }
      </div>
    );
  }
}

export default withRouter(QuerySearchResultsByType);
