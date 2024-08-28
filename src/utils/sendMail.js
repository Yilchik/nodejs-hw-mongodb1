import nodemailer from 'nodemailer';
import { SMTP } from '../constants';
import { env } from './env.js';

const transporter = nodemailer.createTransport({
  host: env(SMTP.SERVER),
  port: Number(env(SMTP.PORT)),
  secure: false,
  auth: {
    user: env(SMTP.USER),
    pass: env(SMTP.PASSWORD),
  },
});

export const sendMail = async (options) => {
  return await transporter.sendMail(options);
};
