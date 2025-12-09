export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ erro: "Método não permitido" });
  }

  try {
    const resposta = await fetch("http://104.131.117.83:8000/webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const dados = await resposta.json();
    return res.status(200).json(dados);

  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao conectar com o servidor Bone",
      detalhe: error.message,
    });
  }
}
