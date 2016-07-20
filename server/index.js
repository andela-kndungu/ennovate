import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import jwt from 'jsonwebtoken';

import connect from './config/db';
import router from './router';

import { Strategy as LocalStrategy } from 'passport-local';
import Users from './models/users.js';

passport.use(new LocalStrategy({ session: false },
  (username, password, done) => {
    Users.findOne({ username: username }, (err, user) => {
      console.log(user);
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
));

const app = express();

if (!process.env.DATABASE_URI) {
  require('dotenv').config();
}

const PORT = process.env.PORT;
connect();

// Set up bodyParser to get passed parameters and post bodies
app.use(bodyParser.urlencoded({
  extended: true,

}));

app.use(bodyParser.json());
app.use(passport.initialize());
app.post('/login',
  passport.authenticate('local', { session: false, failureRedirect: '/' }),
  (req, res) => {
    console.log('hello');
    const token = jwt.sign(req.user, process.env.SECRET_KEY, {
      expiresIn: '90 days',
    });
    req.user._doc.token = token;

    // Return token and success message in JSON
    return res.json(req.user);
  });
app.use(express.static('public'));
// Handle all routes
router(app);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.info('Server listening at port', PORT);
  }
});

