import jwt from 'jsonwebtoken';

const login = (req, res) => {
  const userInfo = {
    name: req.user.name,
    username: req.user.username || 'jane',
    photo: req.user.photo,
    email: req.user.email
  };

  const token = jwt.sign(userInfo, process.env.SECRET_KEY, {
    expiresIn: '90 days',
  });

  req.user._doc.token = token;

  // Return token and success message in JSON
  return res.redirect(`/?token=${token}`);
};

export default login;

