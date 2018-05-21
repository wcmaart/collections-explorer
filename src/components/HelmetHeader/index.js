import React, { PropTypes, Component } from 'react';
import { withRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import { getMetaTags } from '../../helpers';

// eslint-disable-next-line react/prefer-stateless-function
class HelmetHead extends Component {
  render() {
    const metaTags = getMetaTags(this.props.location.pathname);

    return (
      <Helmet>
        <meta name="title" content={metaTags.title} />
        <title>
          {metaTags.title}
        </title>
        <link rel="canonical" href={metaTags.canonical} />
      </Helmet>
    );
  }
}

HelmetHead.propTypes = {
  // location gets passed in from withRouter
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired,
};

export default withRouter(HelmetHead);
