import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import createRoutes from './routes.jsx';

export default function render(req, res) {
  const routes = createRoutes();

  match({ routes, location: req.url }, (error, redirect, props) => {
    if (error) {
      res.status(500).json(error);
    } else if (redirect) {
      res.redirect(302, redirect.pathname + redirect.search);
    } else if (props) {
      const componentHTML = renderToString(
        <RouterContext {...props} />
      );

      res.status(200).send(`
<!doctype html>
<html>
  <head>
    <title>Server Side Rendering</title>
  </head>
  <body>
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

