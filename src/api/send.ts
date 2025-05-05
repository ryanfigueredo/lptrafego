import { Resend } from "resend";
import { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Dados incompletos" });
  }

  try {
    const data = await resend.emails.send({
      from: "KL Facilities <contato@klfacilities.com.br>",
      to: "contato@klfacilities.com.br",
      subject: "Novo contato pelo site",
      html: `
        <div style="font-family: sans-serif; font-size: 14px; padding: 10px;">
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return res.status(500).json({ error: "Erro interno ao enviar o e-mail." });
  }
}
