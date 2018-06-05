import React, { Component } from 'react';
import styles from './styles.scss';
import { OBJECT_MEDIUMS } from '../../constants';
import { Link } from 'react-router-dom';

class SearchResultsByMedium extends Component {
  render() {
    const testImg = this.props.imageUrl || `https://picsum.photos/500/500?random&${this.props.id}`;
    const objects = this.props.objects;
    const thisPageIdx = this.props.thisPageIdx;

    return (
       <div className={`${styles.artObjects} row`}>
        { OBJECT_MEDIUMS.map(type => (
            <div key={type.key} className={`${styles.section} col s12`}>
              <div className={styles.sectionInner}>
                <div className={styles.sectionInnerHeader}>
                  <h3 className={`${styles.h3} left`}>
                    {type.content}
                  </h3>
                  <div className={`${styles.sectionHeaderRight} right`}>
                    <Link className={styles.viewAllLink} to={`/objects/type/${type.key}`} >View all</Link>
                    (xxxxx)
                  </div>
                  <div className={styles.clearfix}></div>
                </div>
                <div className="row">
                  { [1,2,3,4].map(idx => (
                      <div key={idx} className={`col s6 m3`}>
                        <div className={styles.imageWrap}>
                          <img src={testImg} />
                        </div>
                      </div>
                    ))
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
