import React from 'react';
import HelmetHeader from '../HelmetHeader';
import Routes from '../../routes/';
// eslint-disable-next-line no-unused-vars
import styles from './styles.scss';

const App = () =>
  <div>
    <HelmetHeader />
    {Routes}
  </div>;

export default App;
