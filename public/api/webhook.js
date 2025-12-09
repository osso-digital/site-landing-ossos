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

    const texto = await resposta.text();

    // 🔥 força conversão mesmo se o servidor retornar texto
    let dados;
    try {
      dados = JSON.parse(texto);
    } catch {
      dados = { resposta_do_osso: texto };
    }

    return res.status(200).json(dados);

  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao conectar com o servidor Bone",
      detalhe: error.message,
    });
  }
}
