import { Strategy as LocalStrategy } from 'passport-local';
import Users from '../../models/users.js';

const local = new LocalStrategy({ session: false },
  (username, password, done) => {
    Users.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      user.validPassword(password, (error, match) => {
        if (error) {
          return done(null, false, { message: 'Incorrect password.' });
        } else if (match) {
          return done(null, user);
        }
      });
    });
  }
);

export default local;

