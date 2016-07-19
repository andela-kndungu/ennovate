import Users from '../../models/users.js';
import jwt from 'jsonwebtoken';

const login = (req, res) => {
  // Look for user
  Users.findOne({
    username: req.body.username,
  }, (error, user) => {
    // Inform user of errors with the database
    if (error) {
      return res.status(500).json({
        success: false,
        message: 'There was an error reading from the database',
      });
    }

    // Failed, no user with specified ID
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User does not exist',
      });
    }

    // User found, verify provided password is valid
    user.validatePassword(req.body.password, (validationError, isMatch) => {
      if (validationError) {
        throw validationError;
      }

      if (isMatch) {
        // All's good, create a token
        const token = jwt.sign(user, process.env.SECRET_KEY, {
          expiresIn: '90 days',
        });
        user._doc.token = token;

        // Return token and success message in JSON
        return res.json(user);
      }

      // Passwords do not match
      res.status(401).json({
        success: false,
        message: 'Authentication failed. Wrong password.',
      });
    });
  });
};

export default login;

