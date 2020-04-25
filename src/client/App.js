import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';

let user = { name: 'Tony' };

const App = () => {
  return (
    <Fragment>
      <div>Tony Stark</div>
    </Fragment>
  );
};

export default hot(module)(App);
