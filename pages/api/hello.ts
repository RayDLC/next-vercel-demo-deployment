// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

interface Data {
  name: string,
  db_type: string | string[]
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { env, key } = req.query

  res.status(200).json({ name: 'John Doe', db_type: env || '' })
}

