import { OAuth2Strategy as googleStrategy } from 'passport-google-oauth';
import Users from '../../models/users.js';

const handleResponse = (token, refreshToken, profile, done) => {
  process.nextTick(() => {
    Users.findOne({ email: profile.emails[0].value }, (err, user) => {
      if (err) {
        return done(err);
      }

      if (user) {
        if (user.google.id) {
          return done(null, user);
        }
        user.google.id = profile.id;
        user.google.token = token;
        user.save((error) => {
          if (error) {
            throw err;
          }

          return done(null, user);
        });
      } else {
        const newUser = new Users();

        // set all of the relevant information
        const firstName = profile.displayName.split(' ')[0];
        const lastName = profile.displayName.split(' ')[1];

        newUser.google.id = profile.id;
        newUser.google.token = token;
        newUser.name.first = firstName;
        newUser.name.last = lastName;
        newUser.email = profile.emails[0].value; // pull the first email
        newUser.photo = `${profile.photos[0].value}0`;

        Users.findOne({ username: firstName.toLowerCase() }, (e, u) => {
          if (u) {
            const randomUserNameNumber = Math.floor(Math.random() * 1000);
            newUser.username = `${firstName}_ ${randomUserNameNumber}`;
          } else {
            newUser.username = firstName.toLowerCase();
            // save the user
            newUser.save((er) => {
              if (er) {
                throw err;
              }

              return done(null, newUser);
            });
          }
        });
      }
      return null;
    });
  });
};

const googleCredentials = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
};

const google = new googleStrategy(googleCredentials, handleResponse);

export default google;

