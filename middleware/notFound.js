const notFound = async (req, res) => {
  res.status(404).send('This is not the page you are looking for.');
};

export default notFound;
