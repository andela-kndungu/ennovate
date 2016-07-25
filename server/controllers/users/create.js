import Users from '../../models/users.js';
import parseError from '../parseError.js';

const create = (req, res) => {
  // Declare new instance of the Users model
  const user = new Users();

  // Define values of the new object to add
  user.username = req.body.username;
  user.name.first = req.body.firstName;
  user.name.last = req.body.lastName;
  user.email = req.body.email;
  user.password = req.body.password;
  console.log(user);
  // Save the new user parsing the error if request is invalid
  user.save((error) => {
    if (error) {
      return parseError(res, error);
    }

    // User created, return created user
    return res.json(user);
  });
};

export default create;

