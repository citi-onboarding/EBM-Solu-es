import { MailServer } from "src/services/mailServer";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();

const SendMail = async (request: Request, response: Response) => {

    try {
        const { name, email, message } = request.body;

        await MailServer({
            destinationUser: process.env.EMAIL_WILL_RECEIVE,
            subjectText: 'Novo contato de origem de cliente',
            htmlOption:
                `
                <p>
                    o usuario ${name} que possui o email ${email}, entrou em contado e deixou a seguinte mensagem: ${message}.
                </p>
             `
        })

        return response.status(200).send({
            answer: "Enviado"
        })

    } catch (error) {
        return response.status(500).send({
            answer: "Houve algum problema com o envio do email"
        })
    }
}

export { SendMail }