import { sendEMail } from "../webservices/sendMail";



export const emailRoute = { 
    path: '/api/email',
    method: 'post',
    handler: async (req,res) => {
        try {
           const  {to, subject, text, html} = req.body;
            await sendEMail({
                to: to,
                from: process.env.SENDGRID_SENDER_MAIL,
                subject:subject,
                text: text,
                html:html
            })
            res.sendStatus(200);
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
}