import { NextApiHandler } from "next";
import { getAllCategories } from "../../lib/categories";
import { Category } from "../../types/categories";

const handler: NextApiHandler = async (req, res) => {
  const categories: Category[] = await getAllCategories();
  res.status(200).send(categories);
};

export default handler;
