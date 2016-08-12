import { Strategy as githubStrategy } from 'passport-github';
import Users from '../../models/users.js';
import request from 'superagent';

const handleResponse = (token, refreshToken, profile, done) => {
  process.nextTick(() => {
    request
      .get(`https://api.github.com/user/emails?access_token=${token}`)
      .end((err, res) => {
        const email = res.body[0].email;
        Users.findOne({ email: email }, (error, user) => {
          if (error) {
            return done(err);
          }

          if (user) {
            if (user.github.id) {
              return done(null, user);
            }

            user.github.id = profile.id;
            user.github.token = token;
            user.save((saveError) => {
              if (saveError) {
                throw err;
              }

              return done(null, user);
            });
          } else {
            const newUser = new Users();

            // set all of the relevant information
            const firstName = profile.displayName.split(' ')[0];
            const lastName = profile.displayName.split(' ')[1];

            newUser.github.id = profile.id;
            newUser.github.token = token;
            newUser.name.first = firstName;
            newUser.name.last = lastName;
            newUser.email = email;
            newUser.photo = profile.photos[0].value;
            newUser.username = profile.username.toLowerCase();
            newUser.roles = ['user', profile.username.toLowerCase()];

            // save the user
            newUser.save((er) => {
              if (er) {
                throw err;
              }

              return done(null, newUser);
            });
          }
          return null;
        });
      });
  });
};

const githubCredentials = {
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_CALLBACK_URL,
};

const github = new githubStrategy(githubCredentials, handleResponse);

export default github;

