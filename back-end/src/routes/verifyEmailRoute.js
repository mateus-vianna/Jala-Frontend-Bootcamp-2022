import jwt from 'jsonwebtoken';
import { ObjectID } from 'mongodb';
import { getDbConnection } from '../db';

export const VerifyEmailCode = {
    path: '/api/auth/verify-email/',
    method: 'put',
    handler: async (req, res) => {
        const { authorization } = req.headers;
        const { verificationCode } = req.body;

        if (!authorization) {
            return res.status(401).json({ message: 'No authorization header sent' });
        }
      
        const token = authorization.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) return res.status(401).json({ message: 'Unable to verify token' });
            const { id, isVerified, verificationString } = decoded;
            console.log('Check objectId:', ObjectID(id))
            if(!(verificationCode === verificationString)) return res.status(403).json({message:'You need to verify your email again'});

            const db = getDbConnection(process.env.DB_NAME);
            await db.collection('users').updateOne({_id: ObjectID(id)},{$set:{isVerified: true}});
            
            const result = await db.collection('users').findOne({verificationString})
            const { email, name, age, gender } = result; 

            
            jwt.sign({ id, email, isVerified: true, age, gender, name  }, process.env.JWT_SECRET, { expiresIn: '2d' }, (err, token) => {
                if (err) {
                    return res.status(200).json(err);
                }
                res.status(200).json({ token });
            });
        })
    }
}