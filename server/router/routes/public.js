import { Router } from 'express';
import path from 'path';
import passport from 'passport';

import UsersController from '../../controllers/users';

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
router.post('/users', UsersController.create);

// Log in a user (POST /users/login)
router.post('/api/users/login', passport.authenticate('local', {
  session: false
}), UsersController.login);

router.get('/api/users/login/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/api/users/login/auth/google/callback',
  passport.authenticate('google', {
    session: false,
    successRedirect: '/?tokenn=abc'
  }), UsersController.login);

module.exports = router;

