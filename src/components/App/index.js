import React, { PropTypes, Component } from 'react';
import styles from './styles.scss';
import HelmetHeader from '../HelmetHeader';

class App extends Component {
  render() {
    return (
      <div>
        <HelmetHeader path={this.props.location.pathname} />
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
