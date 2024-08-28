import nodemailer from 'nodemailer';
import { SMTP } from '../constants';

const transport = nodemailer.createTransport({
  host: SMTP.SERVER,
  port: SMTP.PORT,
  secure: false,
  auth: {
    user: SMTP.USER,
    pass: SMTP.PASSWORD,
  },
});

export function sendMail(message) {
  return transport.sendMail(message);
}
