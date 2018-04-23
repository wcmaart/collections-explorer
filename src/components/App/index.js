import React, { PropTypes, Component } from 'react';
import styles from './styles.scss';
import HelmetHeader from '../HelmetHeader';
import Header from '../Header';

class App extends Component {
  render() {
    return (
      <div>
        <HelmetHeader path={this.props.location.pathname} />
        <Header />
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
