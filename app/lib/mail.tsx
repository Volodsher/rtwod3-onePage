'use server';
import nodemailer from 'nodemailer';
import validator from 'validator';

export async function sendMail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
    return { success: false, message: 'Error connecting to email service' };
  }

  if (!validator.isEmail(email)) {
    return { success: false, message: 'Invalid email format' };
  }

  const clearStrings = (str: string) => {
    return validator.whitelist(str, `/^[a-zA-Z0-9\s.,!?'"()-]+$/`);
  };

  if (!validator.isAscii(clearStrings(name))) {
    return { success: false, message: 'Name can only contain letters' };
  }

  if (!validator.isAscii(clearStrings(message))) {
    return { success: false, message: 'Invalid message content' };
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: ['anexample123@gmail.com'],
      subject: `This letter is from ${email}`,
      html: `<h1>Message from ${name}</h1>
      <h2>Email: ${email}</h2>
      <p>${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.log('error on server');
    return { success: false, message: 'Error sending email' };
  }
}
