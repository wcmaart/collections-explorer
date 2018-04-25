import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { getMetaTags } from '../../helpers';

class HelmetHead extends Component {
  render() {
    const path = this.props.path;
    const metaTags = getMetaTags(path);

    return (
      <Helmet>
        <meta name="title" content={metaTags.title} />
        <title>{metaTags.title}</title>
        <link rel="canonical" href={metaTags.canonical} />
      </Helmet>
    );
  }
}

export default HelmetHead;