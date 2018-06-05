import React, { Component } from 'react';
import styles from './styles.scss';
import { ApolloProvider, Query } from "react-apollo";
import GraphqlClient from '../../GraphqlClient';
import QuerySingleResult from '../QuerySingleResult';
import { withRouter } from 'react-router';
import { Link, Route } from 'react-router-dom';

class SearchSingleGeneric extends Component {
  constructor() {
    super();
  }

  render() {
    const client = GraphqlClient();

    return (
      <ApolloProvider client={client}>
        <QuerySingleResult {...this.props} />
      </ApolloProvider>
    );
  }
}

export default SearchSingleGeneric;
