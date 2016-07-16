import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import createRoutes from './routes.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
export default function render(req, res) {
  // Needed for onTouchTap
  // // http://stackoverflow.com/a/34015469/988941
  const routes = createRoutes();

  match({ routes, location: req.url }, (error, redirect, props) => {
    if (error) {
      res.status(500).json(error);
    } else if (redirect) {
      res.redirect(302, redirect.pathname + redirect.search);
    } else if (props) {
      injectTapEventPlugin();
      const componentHTML = renderToString(
        <RouterContext {...props} />
      );

      res.status(200).send(`
<!doctype html>
<html>
  <head>
    <title>Server Side Rendering</title>
  </head>
  <body style="margin:0px;">
    <div id="app">${componentHTML}</div>
    <script src="/assets/app.js"></script>
  </body>
</html>
        `);
    } else {
      res.send('Whatever you are looking for is not here');
    }
  });
}

