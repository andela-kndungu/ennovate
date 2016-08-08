import publicRoutes from './routes/public.js';
// import usersRoutes from './routes/users.js';
// import rolesRoutes from './routes/roles.js';
import categoriesRoutes from './routes/categories.js';
// import documentsRoutes from './routes/documents.js';

import authenticate from '../controllers/authenticate';

const router = (app) => {
  app.use('/', publicRoutes);
  app.use('/api/categories', categoriesRoutes);

  // Protect sensitive routes
  // app.use(authenticate.token);
  app.get('/abc', (req, res) => { res.send('hello'); });
};

export default router;

