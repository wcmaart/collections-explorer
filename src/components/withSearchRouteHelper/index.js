import React, { Component } from 'react';
import { withRouter } from 'react-router';

function withSearchRouteHelper(WrappedComponent) {
  class Extender extends Component {
    constructor() {
      super();

      this.state = {
        routeError: null,
        thingId: null,
        pageIdx: null,
        searchCategory: null,
      };
    }

      // check the route state both on mount and update
    componentDidMount() {
      this.getRouteState(this.props);
    }

    // check the route state both on mount and update
    componentWillReceiveProps(nextProps) {
      this.getRouteState(nextProps);
    }

    getRouteState(props) {
      // get values from the router
      const {
        match: { params },
        category,
      } = props;

      const thingId = params.id ? parseInt(params.id, 10) : null;
      const pageIdx = params.page ? parseInt(params.page, 10) : null;

      // protect against a bogus id
      if (isNaN(thingId)) {
        this.setState({
          routeError: 404
        });

        return;
      }

      this.setState({
        thingId,
        pageIdx,
        searchCategory: category,
      });
    }

    render() {
      const {
        routeError,
      } = this.state;

      if (routeError) {
        // todo: make a helper for this and move this logic
        return <Route
          render={({ staticContext }) => {
            // there is no `staticContext` on the client, so
            // we need to guard against that here
            if (staticContext) {
              staticContext.status = routeError;
            }

            return <div>{routeError}</div>;
            }
          }
        />;
      }

      return <WrappedComponent {...this.state} />;
    }
  }

  return withRouter(Extender);
}

export default withSearchRouteHelper;
