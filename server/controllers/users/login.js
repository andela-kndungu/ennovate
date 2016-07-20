import jwt from 'jsonwebtoken';

const login = (req, res) => {
  const token = jwt.sign(req.user, process.env.SECRET_KEY, {
    expiresIn: '90 days',
  });

  req.user._doc.token = token;

  // Return token and success message in JSON
  return res.json(req.user);
};

export default login;

