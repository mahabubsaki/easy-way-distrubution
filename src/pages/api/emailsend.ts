import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'subwarehouse43@gmail.com',
        pass: 'vwfhfcsfgzuanyqu'
    },
});
export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {

            const data = await transporter.sendMail({ from: req.body.email, to: 'mcr21191999@gmail.com', subject: 'Mail from ' + req.body.email + ' on easy way solution', text: req.body.text });

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Email could not be sent' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}