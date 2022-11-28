// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const route = req.query.route as string | undefined;
  if (!route) {
    return res
      .status(403)
      .json({ error: "route query param must be provided." });
  }
  const decodedRoute = decodeURI(route);
  const r = await fetch(`${process.env.SECRET_CMS_HOST}${decodedRoute}`);
  const data = await r.json();
  return res.status(200).json(data);
}
