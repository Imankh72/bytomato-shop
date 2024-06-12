import { NextApiHandler } from "next";
import axios from "axios";

const url = "http://103.75.196.169:8080/api/v1/Basket";

const cartHandler: NextApiHandler = async (req, res) => {
  const { token } = req.cookies;

  if (!token) res.status(401).end();

  switch (req.method) {
    // GET Request Handler
    case "GET":
      try {
        const { data } = await axios(url, {
          headers: {
            Authorization: token,
          },
        });
        res.status(200).send(data.items);
      } catch (error: any) {
        res.status(400).send(error.message);
      }
      break;

    // PUT Request Handler
    case "PUT":
      const { productId, quantity } = req.body;
      try {
        const { data } = await axios.put(
          url,
          { productId, quantity },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        res.status(200).send(data.items);
      } catch (error: any) {
        res.status(400).send(error.message);
      }
      break;

    // DELETE Request Handler
    case "DELETE":
      try {
        const { data } = await axios.delete(url, {
          headers: {
            Authorization: token,
          },
        });
        res.status(200).send({
          message: "Cart successfully deleted",
          cartItems: data.items,
        });
      } catch (error: any) {
        res.status(400).send(error.message);
      }
      break;

    //   Other Request Handler
    default:
      res.status(500).send({
        message: `Method ${req.method} is not allowed`,
      });
      break;
  }
};

export default cartHandler;
