import React, { Component } from 'react';
import styles from './styles.scss';
import { parseObjectProps } from '../../helpers';
import { Link } from 'react-router-dom';

class SearchResultsByMedium extends Component {
  render() {
    const {
      searchResultItems
    } = this.props;

    return (
       <div className={`${styles.artObjects} row`}>
        { searchResultItems.map(item => (
            <div key={item.key} className={`${styles.section} col s12`}>
              <div className={styles.sectionInner}>
                <div className={styles.sectionInnerHeader}>
                  <h3 className={`${styles.h3} left`}>
                    {item.content}
                  </h3>
                  <div className={`${styles.sectionHeaderRight} right`}>
                    <Link className={styles.viewAllLink} to={`/objects/search-type/${item.key}`} >View all</Link>
                    (xxxxx)
                  </div>
                  <div className={styles.clearfix}></div>
                </div>
                <div className="row">
                  {
                    item.objects
                    .map(object => {
                      return parseObjectProps(object);
                    })
                    .filter(object => {
                      return object.imageUrl;
                    })
                    .slice(0,4)
                    .map(object => {
                      return (
                        <div key={object.id} className={`col s6 m3`}>
                          <div className={styles.imageWrap}>
                            {/*
                            <span>{object.title}</span>
                            <span>{object.id}</span>
                            */}
                            <img src={object.imageUrl} />
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
              <div>
                <h3 className={styles.h3}>
                </h3>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default SearchResultsByMedium;
