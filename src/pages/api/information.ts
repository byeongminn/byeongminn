import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { type } = req.query;

  const result = await import(`../../../public/assets/data/${type}.json`);

  return res.status(200).json(result.default);
}
