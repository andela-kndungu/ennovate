import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.jsx';
import Hello from './components/Hello.jsx';

export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Hello} />
    </Route>
  );
};

