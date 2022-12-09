import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import { KEY } from '../../constants/auth/key';

type Data = {
  access_token: string;
  expiredAt: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST' || !req.body) {
    res.statusCode = 404;
    res.end('Error');
    return;
  }

  const { username, password } = req.body;
  
  res.status(200).json({
    access_token: jwt.sign(
      {
        username,
        admin: username === 'admin' && password === 'admin'
      },
      KEY,
      {
        expiresIn: '24h'
      }
    ),
    expiredAt: ''
  })
}
