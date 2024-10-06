const nodemailer = require('nodemailer');

// Configure the email transport
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email service provider
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password (or application-specific password)
    },
});

const sendEmail = async ({ to, subject, text }) => {
    try {
        await transporter.sendMail({
            from: 'no-reply@example.com', // Sender email
            to,
            subject,
            text,
        });
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
};

module.exports = sendEmail;
