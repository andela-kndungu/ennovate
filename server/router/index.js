import publicRoutes from './routes/public.js';
import categoriesRoutes from './routes/categories.js';
import documentsRoutes from './routes/documents.js';

import authenticate from '../controllers/authenticate';

const router = (app) => {
  app.use('/', publicRoutes);
  app.use('/api/categories', categoriesRoutes);

  // Protect sensitive routes
  app.use(authenticate.token);
  app.use('/api/documents', documentsRoutes);
};

export default router;

