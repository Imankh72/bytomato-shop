import { NextApiHandler } from "next";
import cookie from "cookie";

const login: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5NjUiLCJuYmYiOjE2NzczMDY4MzYsImV4cCI6MTcwODg0MjgzNiwiaWF0IjoxNjc3MzA2ODM2fQ.hlklaw9ksIpox5e0WQ7hEyvVQh7-ltmuYYyp2iTlqgo";

  try {
    res.status(200).setHeader(
      "set-cookie",
      cookie.serialize("token", token, {
        path: "/api",
        httpOnly: true,
      })
    );
    res.status(200).json({
      message: "Logged in successfully",
    });
  } catch (error) {
    res.status(401).end();
  }
};

export default login;
