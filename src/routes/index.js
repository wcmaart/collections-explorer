import React, { PropTypes } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/Home';
import Search from '../components/Search';
import Explore from '../components/Explore';

// Note: A redirect can be added in this form
// <RedirectWithStatus status={301} from="/old" to="/new" />
function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/explore" component={Explore} />
      <Route component={NotFound} />
    </Switch>
  );
}

Status.propTypes = {
  code: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

RedirectWithStatus.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
};

export default Routes();
