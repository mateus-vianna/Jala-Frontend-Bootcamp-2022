import { sendEMail } from "../webservices/sendMail";

export const emailRoute = { 
    path: '/api/email',
    method: 'post',
    handler: async (req,res) => {
        try {
            await sendEMail({
                to: 'mawavial+test1@gmail.com',
                from: 'mawavial@gmail.com',
                subject:'test',
                html:'You received an email from sendgrid'
            })
            res.sendStatus(200);
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
}