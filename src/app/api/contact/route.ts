import { NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';

export async function POST(request: Request, response: Response) {
  const { sender, subject, message } = await request.json();
  const transporter = createTransport({
    service: 'gmail.com',
    auth: {
      user: process.env.USER_ID,
      pass: process.env.USER_PASS,
    },
  });
  const mailOptions = {
    subject,
    to: process.env.MAIL_OPTIONS_TO,
    text: `${message}\n\nsender: ${sender}`,
  };

  let res;
  try {
    res = await transporter.sendMail(mailOptions);
  } catch (e) {
    return NextResponse.json(res, { status: 500 });
  }

  return NextResponse.json(res, { status: 200 });
}
