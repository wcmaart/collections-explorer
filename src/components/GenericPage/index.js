import React, { PropTypes, Component } from 'react';
import styles from './styles.scss';
import Header from '../Header';

class GenericPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h1>{this.props.title}</h1>
        </div>
      </div>
    );
  }
}

GenericPage.propTypes = {
  title: PropTypes.string.isRequired,
};

GenericPage.defaultProps = {
  title: 'Generic Page',
};

export default GenericPage;
