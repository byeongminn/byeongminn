import { ProfileType } from '@/types';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const result = (await import(
    '../../../public/assets/data/profile.json'
  )) as ProfileType;

  return res.status(200).json(result);
}
