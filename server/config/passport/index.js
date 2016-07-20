import passport from 'passport';
import local from './local.js';

export default function () {
  passport.use(local);
}

