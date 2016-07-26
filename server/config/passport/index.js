import passport from 'passport';
import local from './local.js';
import google from './google.js';

export default function () {
  passport.use(local);
  passport.use(google);
}

