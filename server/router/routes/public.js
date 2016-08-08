import { Router } from 'express';
import path from 'path';
import passport from 'passport';

import UsersController from '../../controllers/users';
import DocumentsController from '../../controllers/documents';

const router = Router();

// Return the home page (GET /)
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/index.html'));
});

// Return the home page (GET /)
router.get('/xyz', (req, res) => {
  res.json({ a: 'b', c: 'd' });
});
// Create a user (POST /users)
router.post('/api/users', UsersController.create);

// Create a document (POST /users)
router.post('/api/documents', DocumentsController.create);

// Create a document (POST /users)
router.get('/api/documents', DocumentsController.find.all);

// Log in a user (POST /users/login)
router.post('/api/users/login', passport.authenticate('local', {
  session: false
}), UsersController.logIn.local);

router.get('/api/users/login/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/api/users/login/auth/google/callback',
  passport.authenticate('google', {
    session: false
  }), UsersController.logIn.social);

router.get('/api/users/login/auth/github', passport.authenticate('github', {
  scope: ['user:email']
}));

router.get('/api/users/login/auth/github/callback',
  passport.authenticate('github', {
    session: false
  }), UsersController.logIn.social);

module.exports = router;

