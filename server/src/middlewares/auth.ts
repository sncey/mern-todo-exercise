import jwt from 'jsonwebtoken';
import keys from "../config/keys";
import User from "../models/user";

export const auth = async (req: any, res: any, next: any) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) return res.status(401).send('no token provided');

        //TODO: FIX "any" here too.
        const decoded = jwt.verify(token, keys.SECRET_KEY) as any;

        const user = await User.findOne({email: decoded.email});
        if (!user) return res.status(401).send('no such a user');

        req.user = user;

        next();
    } catch (err) {
        res.status(401).send('authentication failed!');
    }
};