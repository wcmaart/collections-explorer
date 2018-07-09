import React, { Component } from 'react'
import { withRouter } from 'react-router';
import styles from './styles.scss';
import { Link } from 'react-router-dom';
import ArtObjectCard from '../ArtObjectCard';
import MasonryGrid from '../MasonryGrid';
import { FAKE_MAKER_BIO } from '../../constants';

class SingleMakerView extends Component {
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
    return (
      <div>
        <button onClick={this.goBack.bind(this)} className={`${styles.goBack} btn-flat`}>
          Go Back
        </button>

        <h1>
        {this.props.title}
        </h1>

        <section className="section">
          <p className={`${styles.makerBio} paragraph`}>
          {FAKE_MAKER_BIO}
          </p>
        </section>

        <section className="section">
          <h2 className={styles.h2}>
          Most Popular
          </h2>

          <MasonryGrid masonryElements={this.getMasonryElements(this.props.objects)} />
        </section>
      </div>
    );
  }
}

export default withRouter(SingleMakerView);
