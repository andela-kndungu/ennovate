import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import createRoutes from './routes.jsx';

// Grab the state from a global injected into
// server-generated HTML
const routes = createRoutes();

render(
  <Router>
    {routes}
  </Router>, document.getElementById('app'));

