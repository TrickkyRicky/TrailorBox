// Need a request token and users can login with that
const handler = async (req, res) => {
  res.status(200).json({ name: "John Doe" });
};

export default handler;
