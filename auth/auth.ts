import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken';
import { KEY } from "../constants/auth/key";

export const authenticated = (fn: NextApiHandler) => async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    jwt.verify(req.headers.authorization!, KEY, async (error, decoded) => {
        if (!error && decoded) {
            return await fn(req, res)
        }

        if (error) console.log(error);
        

        res.status(500).json({ message: 'Sorry you are not authenticated!' })
    })
}