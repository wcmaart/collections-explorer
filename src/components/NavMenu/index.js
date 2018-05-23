import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import { withRouter } from 'react-router'
import { NAV_LINKS } from '../../constants';

class NavMenu extends Component {
  render() {
    const { match, location, history } = this.props;

    const getActiveClass = (url) => {
      return url === this.props.location.pathname ? 'active' : '';
    };

    return (
      <nav className={styles.navMenu}>
        <div className="container nav-wrapper">
          <ul>
            {
              NAV_LINKS.map((link) => (
                <li className={`${styles.navItem} ${getActiveClass(link.url)}`} key={link.url}>
                  <Link className={styles.link} to={link.url}>
                    {link.content}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(NavMenu);
