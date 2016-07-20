import { Router } from 'express';
import path from 'path';
import passport from 'passport';

import UsersController from '../../controllers/users';

const router = Router();

// Return the home page (GET /)
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/index.html'));
});

// Create a user (POST /users)
router.post('/users', UsersController.create);

// Log in a user (POST /users/login)
router.post('/api/users/login', passport.authenticate('local', {
  session: false,
  failureRedirect: '/',
}), UsersController.login);

module.exports = router;

