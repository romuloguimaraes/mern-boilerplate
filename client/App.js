import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import User from './User';

let user = { name: 'Tony' };

const App = () => {
  return (
    <Fragment>
      <User user={user} />;
    </Fragment>
  );
};

export default hot(module)(App);
