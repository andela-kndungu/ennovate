import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import Users from '../../models/users.js';

passport.use(new LocalStrategy({ session: false },
  (username, password, done) => {
    Users.findOne({ username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

