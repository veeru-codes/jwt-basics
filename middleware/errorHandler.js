const errorHandler = async (error, req, res, next) => {
  if (error.message === 'InvalidCredentials') {
    res.status(400).json({ msg: 'Please provide username & password' });
  } else if (error.message === 'InvalidHeaders') {
    res.status(400).json({ msg: 'Please provide valid Auth Headers' });
  } else if (
    error.message === 'invalid token' ||
    error.message === 'invalid signature'
  ) {
    res.status(401).json({ msg: 'Not authorized to access the route' });
  }
  res.status(400).json({ msg: error.message });
  next(error);
};

export default errorHandler;
