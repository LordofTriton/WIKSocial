import * as nodemailer from 'nodemailer';
import { htmlToText } from 'html-to-text';
import * as path from 'path';
import * as fs from 'fs';

export class EmailService {
  static newTransport() {
    return nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      secure: true,
      logger: true,
      debug: true,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  // Send Actual Email
  static async sendEmail(
    template: string,
    subject: string,
    receiverEmail?: string | string[],
    options?: Record<string, any>,
    receiverName?: string,
    senderEmail?: string,
    attachments?: Array<{ filename: string; path: string; cid: string }>,
  ) {
    senderEmail = senderEmail || `URI <${process.env.SENDER_EMAIL}>`;

    // 1. Render HTML based on a pug template
    const templatePath = path.resolve(
      'src',
      `UtilityLayer/Views/NewEmailTemplates/${template}.html`,
    );
    let html = fs.readFileSync(templatePath, 'utf8');

    for (let option of Object.keys(options)) {
      html = html.replace(`{{${option}}}`, options[option]);
    }

    // 2. Define email options
    const mailOptions: any = {
      from: senderEmail,
      to: Array.isArray(receiverEmail) ? undefined : receiverEmail, // Use 'to' if it's a single email
      bcc: Array.isArray(receiverEmail) ? receiverEmail : undefined, // Use 'bcc' if it's an array of emails
      subject,
      html,
      text: htmlToText(html),
    };
    if (attachments) { mailOptions.attachments = attachments; }

    // 3. Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  static async SendWelcome(email: string, username: string) {
    await this.sendEmail('welcome', 'Welcome to WIK!', email, {
      username
    });
  }

  static async SendEmailVerification(email: string, verificationCode: string) {
    await this.sendEmail('verifyEmail', 'Verify Your Email Address', email, {
      verificationCode
    }
    );
  }

  static async SendPasswordReset(email: string, resetCode: string) {
    await this.sendEmail('passwordReset', 'Reset Your Password', email, {
      resetCode
    }
    );
  }
}
