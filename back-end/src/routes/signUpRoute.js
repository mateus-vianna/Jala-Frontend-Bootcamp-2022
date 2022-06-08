import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getDbConnection } from '../db';

export const signUpRoute = {
    path: '/api/auth/signup',
    method: 'post',
    handler: async (req, res) => {
        const { name, email, password } = req.body;

        const db = getDbConnection(process.env.DB_NAME);
        const user = await db.collection('users').findOne({ email });

        if (user) {
            res.sendStatus(409);
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const result = await db.collection('users').insertOne({
            name,
            email,
            passwordHash,
        });
        const { insertedId } = result;

        jwt.sign({
            id: insertedId,
            email,
            name
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '2d',
        },
        (err, token) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json({ token });
        });
    }
}