import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import App from '../components/App';

// Webpack 2 supports ES2015 `import()` by auto-
// chunking assets. Check out the following for more:
// https://webpack.js.org/guides/migrating/#code-splitting-with-es2015

const importHome = (nextState, cb) => {
  import(/* webpackChunkName: "home" */ '../components/Home')
    .then(module => cb(null, module.default))
    .catch(e => {
      throw e;
    });
};

const importSearch = (nextState, cb) => {
  import(/* webpackChunkName: "search" */ '../components/Search')
    .then(module => cb(null, module.default))
    .catch(e => {
      throw e;
    });
};

const importExplore = (nextState, cb) => {
  import(/* webpackChunkName: "explore" */ '../components/Explore')
    .then(module => cb(null, module.default))
    .catch(e => {
      throw e;
    });
};

const importArtObjects = (nextState, cb) => {
  import(/* webpackChunkName: "artObjects" */ '../components/ArtObjects')
    .then(module => cb(null, module.default))
    .catch(e => {
      throw e;
    });
};

const importPeople = (nextState, cb) => {
  import(/* webpackChunkName: "artObjects" */ '../components/People')
    .then(module => cb(null, module.default))
    .catch(e => {
      throw e;
    });
};

// We use `getComponent` to dynamically load routes.
// https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md
const routes = (
  <Route path="/" component={App}>
    <IndexRoute getComponent={importHome} />
    <Route path="art-objects" getComponent={importArtObjects} />
    <Route path="search" getComponent={importSearch} />
    <Route path="explore" getComponent={importExplore} />
    <Route path="people" getComponent={importPeople} />
  </Route>
);

// Unfortunately, HMR breaks when we dynamically resolve
// routes so we need to require them here as a workaround.
// https://github.com/gaearon/react-hot-loader/issues/288
if (module.hot) {
  require('../components/Home'); // eslint-disable-line global-require
  require('../components/Search'); // eslint-disable-line global-require
  require('../components/Explore'); // eslint-disable-line global-require
  require('../components/ArtObjects'); // eslint-disable-line global-require
  require('../components/People'); // eslint-disable-line global-require
}

export default routes;
