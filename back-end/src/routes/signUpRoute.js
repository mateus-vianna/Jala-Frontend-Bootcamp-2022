import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getDbConnection } from '../db';
import { v4 as uuidv4 } from 'uuid';
import { sendEmail } from '../webservices/sendMail';

export const signUpRoute = {
    path: '/api/auth/signup',
    method: 'post',
    handler: async (req, res) => {
        const { name, email, password, age, gender } = req.body;

        const db = getDbConnection(process.env.DB_NAME);
        const user = await db.collection('users').findOne({ email });

        if (user) {
            res.sendStatus(409);
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const verificationString = uuidv4();

        const result = await db.collection('users').insertOne({
            name,
            email,
            passwordHash,
            age,
            gender,
            isVerified: false,
            verificationString

        });
        const { insertedId } = result;

        try {
            await sendEmail({
                to:email, //mawavial@gmail.com
                from: process.env.SENDGRID_SENDER_MAIL,
                subject: 'Please verify your email',
                text: `Thanks for signing up! To verify yoiur email, click here: ${process.env.FRONT}/verify-email/${verificationString}`
            })
        } catch (err) {
            console.log('Signup route error: ', err);
            res.status(500);
        }
        jwt.sign({
            id: insertedId,
            email,
            name,
            age,
            gender,
            isVerified: false,
            verificationString
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