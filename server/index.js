import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

const app = express();
const PORT = process.env.PORT || 3000;
const databaseUri = process.env.MONGODB_URI || 'mongodb://localhost/ennovate';

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username  }, function(err, user) {
      if (err) { return done(err);  }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.'  });

      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.'  });

      }
      return done(null, user);

    });

  }

));/ Connect to the database and get the connection
mongoose.connect(databaseUri);
const dbConnection = mongoose.connection;

// Provide feedback on the DB connection
dbConnection.on('error', (error) => {
  console.error(error);
});

dbConnection.once('open', () => {
  console.info('Successfully connected to db');
});

app.use(express.static('public'));

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.info('Server listening at port', PORT);
  }
});

