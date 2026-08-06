import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: '',
    port: 587,
    secure: false,
    auth: {
        user: '',
        pass: ''
    }
});

export default transporter;
