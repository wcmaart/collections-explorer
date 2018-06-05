import React, { Component } from 'react';
import styles from './styles.scss';
import { ApolloProvider, Query } from "react-apollo";
import GraphqlClient from '../../GraphqlClient';
import QuerySearchResults from '../QuerySearchResults';
import { Link, Route } from 'react-router-dom';

class SearchGeneric extends Component {
  constructor() {
    super();

    this.onSubmitSearch = this.onSubmitSearch.bind(this);
  }

  onSubmitSearch(e) {
    // quick and dirty for now
    e.preventDefault();
    const inputVal = e.target[0].value;

    // clear the input first
    e.target[0].value = '';

    this.props.history.push(`${this.props.slugPrefix}/${inputVal}`);
  }

  render() {
    const {
      searchInputPlaceholder,
    } = this.props;

    const client = GraphqlClient();

    // todo: simplify syntax of props below
    return (
      <div>
        <form onSubmit={this.onSubmitSearch}>
          <div className="row">
            <div className="input-field col s12">
              <div className={styles.searchWrapper}>
                <input id="search" type="text" placeholder={searchInputPlaceholder} />
              </div>
            </div>
          </div>
        </form>

        <ApolloProvider client={client}>
          <QuerySearchResults
            thingId={this.props.thingId}
            pageIdx={this.props.pageIdx}
            gqlQueries={this.props.gqlQueries}
            getResultsWrapper={this.props.getResultsWrapper}
          />
        </ApolloProvider>
      </div>
    );
  }
}

export default SearchGeneric;
