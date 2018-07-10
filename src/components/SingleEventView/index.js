import React, { Component } from 'react'
import { withRouter } from 'react-router';
import styles from './styles.scss';
import { Link } from 'react-router-dom';
import ArtObjectCard from '../ArtObjectCard';
import MasonryGrid from '../MasonryGrid';
import { parseEventProps } from '../../helpers';
import { FAKE_EVENT_DETAILS } from '../../constants';

class SingleEventView extends Component {
  constructor() {
    super(...arguments);

    this.goBack = this.goBack.bind(this);
  }

  getMasonryElements(elements) {
    return elements.map(function(item) {
      return (
        <li key={item.id} className="masonryGridItem col s12 l3">
          <ArtObjectCard {...item} />
        </li>
      );
    });
  }

  // Todo #consolidateGoback functions and style
  goBack (props) {
    this.props.history.goBack();
  }

  render() {
    const props = parseEventProps(this.props);
    const {
      title,
      objects,
      description,
    } = props;

    // todo: #dedupEventStatListItems
    const statListItems = [
      {
        label: 'Faculty Member',
        value: props.facultyMember,
      },
      {
        label: 'Subject And Course',
        value: props.subjectAndCourse,
      },
      {
        label: 'Subject',
        value: props.subject,
      },
      {
        label: 'Institution',
        value: props.institution,
      },
    ];

    return (
      <div>
        <button onClick={this.goBack.bind(this)} className={`${styles.goBack} btn-flat`}>
          Go Back
        </button>

        <h1>
        {title}
        </h1>

        <section className="section">
          <p className={`${styles.makerBio} paragraph`}>
            {description}
          </p>
        </section>

        <section className="section">
          <ul>
            {
              statListItems.map(statListItem => {
                return statListItem.value && (
                  <li className={styles.statListItem} key={statListItem.label}>
                    <span className={styles.statLabel}>{statListItem.label}</span>
                    <span className={styles.colon}>: </span>
                    <span className={styles.statValue}>{statListItem.value}</span>
                  </li>
                );
              })
            }
          </ul>
        </section>

        <section className="section">
          <h2 className={styles.h2}>
          Related Objects
          </h2>

          { objects && objects.length &&
            <MasonryGrid masonryElements={this.getMasonryElements(objects)} />
          }
        </section>
      </div>
    );
  }
}

export default withRouter(SingleEventView);
