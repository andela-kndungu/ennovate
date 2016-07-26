import publicRoutes from './routes/public.js';
// import usersRoutes from './routes/users.js';
// import rolesRoutes from './routes/roles.js';
// import tagsRoutes from './routes/tags.js';
// import documentsRoutes from './routes/documents.js';

import authenticate from '../controllers/authenticate';

const router = (app) => {
  app.use('/', publicRoutes);

  // Protect sensitive routes
  // app.use(authenticate.token);
  app.get('/abc', (req, res) => { res.send('hello'); });
};

export default router;

