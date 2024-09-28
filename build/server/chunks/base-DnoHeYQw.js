import nodemailer from 'nodemailer';
import { d as private_env } from './shared-server-BfUoNEXY.js';

async function sendEmail(to, subject, content) {
  if (private_env.MAIL_ENABLED !== "true") {
    return false;
  }
  const transporter = nodemailer.createTransport({
    host: private_env.MAIL_SERVER,
    port: Number(private_env.MAIL_PORT),
    secure: private_env.MAIL_USE_SSL === "true",
    auth: {
      user: private_env.MAIL_USERNAME,
      pass: private_env.MAIL_PASSWORD
    }
  });
  const info = await transporter.sendMail({
    from: private_env.MAIL_FROM,
    to,
    subject,
    text: content
  });
  if (info.accepted.length === 0) {
    return false;
  }
  return true;
}

export { sendEmail as s };
//# sourceMappingURL=base-DnoHeYQw.js.map
