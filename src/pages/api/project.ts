import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id = '' }: { id?: string } = req.query;

  const result = await import(`../../../public/assets/data/projects.json`);

  return res
    .status(200)
    .json(id === '' ? result.default[0] : result.default[parseInt(id)]);
}
