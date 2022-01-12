import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const contato = (req: Request, res: Response) => {


    //1 - Configurar o Transporter

    let transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST as string,
        port: process.env.SMTP_PORT as string,
        auth:{
            user: process.env.SMTP_USER as string,
            pass: process.env.SMTP_PASSWORD as string
        }
    });

    //2 - Configurar a mensagem
    //3 - Enviar a mensagem

    res.json({pong: true});
}
