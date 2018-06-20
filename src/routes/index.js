import React, { PropTypes } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/Home';
import withSearchRouteHelper from '../components/withSearchRouteHelper';
import SearchObjects from '../components/SearchObjects';
import SearchMakers from '../components/SearchMakers';
import SearchExhibitions from '../components/SearchExhibitions';
import SearchSingleObject from '../components/SearchSingleObject';
import SearchSingleMaker from '../components/SearchSingleMaker';
import SearchSingleExhibition from '../components/SearchSingleExhibition';
import GenericPage from '../components/GenericPage';

const WrapSearchObjects = withSearchRouteHelper(SearchObjects);
const WrapSearchMakers = withSearchRouteHelper(SearchMakers);
const WrapSearchExhibitions = withSearchRouteHelper(SearchExhibitions);
const WrapSearchSingleObject = withSearchRouteHelper(SearchSingleObject);
const WrapSearchSingleMaker = withSearchRouteHelper(SearchSingleMaker);
const WrapSearchSingleExhibition = withSearchRouteHelper(SearchSingleExhibition);

// with guidance from https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/server-rendering.md
const Status = ({ code, children }) =>
  <Route
    render={({ staticContext }) => {
      // there is no `staticContext` on the client, so
      // we need to guard against that here
      if (staticContext) {
        staticContext.status = code;
      }

      return children;
    }}
  />;

const RedirectWithStatus = ({ from, to, status }) =>
  <Status code={status}>
    <Redirect from={from} to={to} />
  </Status>;

const NotFound = () =>
  <Status code={404}>
    <div>
      <h1>Sorry, can’t find that.</h1>
    </div>
  </Status>;

// Note: A redirect can be added in this form
// <RedirectWithStatus status={301} from="/old" to="/new" />
function Routes() {
  return (
    <Switch>
      <Redirect from='/objects/page/0' to='/objects' />
      <Redirect from='/makers/page/0' to='/makers' />

      <Route exact path="/" component={Home} />


      {/*
        Todo - These patterns can probably all be consolidated.
        E.G. /objects/ can be /:searchCategory/
       */}

      {/* Objects */}
      <Route exact path="/objects" component={WrapSearchObjects} />
      <Route path="/objects/page/:page" component={WrapSearchObjects} />
      <Route path="/objects/search-type/:searchType" component={WrapSearchObjects} />
      <Route path="/objects/:id" component={WrapSearchSingleObject} />

        {/* Makers */}
      <Route exact path="/makers" component={WrapSearchMakers} />
      <Route path="/makers/page/:page" component={WrapSearchMakers} />
      <Route path="/makers/search-type/:searchType" component={WrapSearchMakers} />
      <Route path="/makers/:id" component={WrapSearchSingleMaker} />

        {/* Exhibitions */}
      <Route exact path="/exhibitions" component={WrapSearchExhibitions} />
      <Route path="/exhibitions/page/:page" component={WrapSearchExhibitions} />
      <Route path="/exhibitions/search-type/:searchType" component={WrapSearchExhibitions} />
      <Route path="/exhibitions/:id" component={WrapSearchSingleExhibition} />

      {/* The rest */}
      {/*
        <Route path="/periods" component={
          ()=> <GenericPage title="Periods"/>
        } />
        <Route path="/materials" component={
          ()=> <GenericPage title="Materials"/>
        } />
        <Route path="/colors" component={
          ()=> <GenericPage title="Colors"/>
        } />
      */}

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
