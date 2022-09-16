const login = async (req, res) => {
  const data = req.body;
  res.status(200).json({ msg: data });
};

const dashboard = async (req, res) => {
  res.status(200).json({ msg: 'User details' });
};

export { login, dashboard };
