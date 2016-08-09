import Users from '../../models/users.js';
import request from 'superagent';
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
      request
        .get('https://gender-api.com/get')
        .query({ name: req.body.firstName })
        .query({ ip: 'auto' })
        .query({ key: process.env.GENDER_API_KEY })
        .end((err, resp) => {
          console.log(resp.body);
          // Declare new instance of the Users model
          const newUser = new Users();

          // Define values of the new object to add
          newUser.username = req.body.username;
          newUser.name.first = req.body.firstName;
          newUser.name.last = req.body.lastName;
          newUser.email = req.body.email;
          newUser.password = req.body.password;

          switch (resp.body.gender) {
            case 'male':
              newUser.photo = 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-tech-guy.png';
              break;
            case 'female':
              newUser.photo = 'https://upload.wikimedia.org/wikipedia/commons/0/07/Avatar_girl_face.png';
              break;
            default:
              newUser.photo = 'http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-6.jpg';
          }
          // Save the new user parsing the error if request is invalid
          newUser.save((er) => {
            if (er) {
              return parseError(res, er);
            }

            // User created, return created user
            return res.json(newUser);
          });
        });
    }
  });
};

export default create;

