import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import { withRouter } from 'react-router'

class NavMenu extends Component {
  render() {
    const { match, location, history } = this.props;

    return (
      <div className="container">
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/search">
              Search the Collection
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.navItemRight}`}>
            <Link className={styles.link} to="/explore">
              Explore the Collection
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(NavMenu);
