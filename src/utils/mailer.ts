import nodemailer from 'nodemailer';
import { SECRETS } from './Utils';

interface Attechment {
    filename: string,
    buffer: Buffer
}

export class Mailer {
    static _transporter = nodemailer.createTransport({
        service: SECRETS.mail.service,
        auth: SECRETS.mail.auth,
    });

    static sendMail = async (to: string, subject: string, html: string, attechments?: Attechment[]) => {
        let attachments_: { filename: string; content: Buffer<ArrayBufferLike>; }[] = [];

        if (attechments) {
            attechments.forEach((attechment: Attechment) => {
                attachments_.push({
                    filename: attechment.filename,
                    content: attechment.buffer,
                })
            });
        }

        const mailOptions = {
            // from: SECRETS.mail.auth.user,
            from: `Arri Healthcare <${SECRETS.mail.auth.user}>`,
            to: to,
            subject: subject,
            html: html,
            attachments: attachments_
        };


        const send = await this._transporter.sendMail(mailOptions);
        console.log(send);
    }
}