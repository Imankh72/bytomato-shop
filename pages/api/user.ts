import { NextApiHandler } from "next";

const userHandler: NextApiHandler = async (req, res) => {
  const { token } = req.cookies;
  if (!token) {
    res.status(401).end();
    return;
  }

  try {
    res.status(200).json({});
  } catch (error) {
    res.status(401).end();
  }
};

export default userHandler;
