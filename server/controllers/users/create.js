import Users from '../../models/users.js';
import parseError from '../parseError.js';

const create = (req, res) => {
  Users.findOne({ email: req.body.email }, (error, user) => {
    if (error) {
      return parseError(res, error);
    }

    if (user) {
      user.username = req.body.username;
      user.password = req.body.password;
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;

      user.save((err) => {
        if (err) {
          return parseError(res, err);
        }

        // User created, return created user
        return res.json(user);
      });
    } else {
      // Declare new instance of the Users model
      const newUser = new Users();

      // Define values of the new object to add
      newUser.username = req.body.username;
      newUser.name.first = req.body.firstName;
      newUser.name.last = req.body.lastName;
      newUser.email = req.body.email;
      newUser.password = req.body.password;
      // Save the new user parsing the error if request is invalid
      newUser.save((er) => {
        if (er) {
          return parseError(res, er);
        }

        // User created, return created user
        return res.json(newUser);
      });
    }
  });
};

export default create;

