import Jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  const authHeaders = req.headers.authorization;

  // Check authorization headers
  if (!authHeaders || !authHeaders.startsWith('Bearer ')) {
    throw new Error('InvalidHeaders');
  }

  // Extract the token from auth header: 'Bearer xxx.yyy.zzz'
  const token = authHeaders.split(' ')[1];

  // Verify the token
  const decodedToken = Jwt.verify(token, process.env.SECRET);

  req.user = decodedToken.username;
  next();
};

export default auth;
