import emailjs, { EmailJSResponseStatus } from "@emailjs/nodejs";
import { NextResponse } from "next/server";

const SERVICE_ID = process.env.SERVICE_ID;
const TEMPLATE_ID = process.env.TEMPLATE_ID;
const PUBLIC_KEY = process.env.PUBLIC_KEY; 
const PRIVATE_KEY = process.env.PRIVATE_KEY;

export async function POST(request) {
    try {
        const { user_name, user_email, message } = await request.json()

        const templateParams = {
            user_name: user_name,
            user_email: user_email,
            message: message,
        }

        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            templateParams,
            {
                publicKey: PUBLIC_KEY,
                privateKey: PRIVATE_KEY,
            }
        );

        if (response.status === 200) {
            return NextResponse.json({message: 'E-mail enviado com sucesso!!'}, { status: 200});
        } else {
            console.error('EmailJS Status: ', response.status);
            return NextResponse.json({ message: 'Falha no ennvio do EmailJS.'}, { status: 500});
        }
    } catch (error) {
        if (error instanceof EmailJSResponseStatus) {
            console.error('ERRO (EmailJS Status):', error.status, error.text);
            
            // Retorno genérico para o cliente
            return NextResponse.json({ 
                message: 'Falha na comunicação com o servidor de e-mail. Verifique suas chaves.',
            }, { status: 500 });
        }

        // 2. Trata outros erros de Runtime (Rede, Parsing, Código, etc.)
        console.error('ERRO FATAL NO SERVIDOR:', error);
        
        // Retorno genérico, ocultando detalhes de erro interno
        return NextResponse.json({ 
            message: 'Erro interno no servidor ao processar sua requisição.',
        }, { status: 500 });
        
    }
}