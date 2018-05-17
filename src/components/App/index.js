import React, { PropTypes, Component } from 'react';
import styles from './styles.scss';
import HelmetHeader from '../HelmetHeader';

class App extends Component {
  render() {
    return (
      <div>
        <HelmetHeader path={this.props.location.pathname} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
