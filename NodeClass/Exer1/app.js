const { randomUUID } = require("crypto");
const express = require("express");
const { request } = require("http");
const app = express();
app.use(express.json());

//array
const Pessoas = [
  { id: 1, nome: "Maicon", celular: 99932199 },
  { id: 2, nome: "Jackson", celular: 99988899 },
  { id: 3, nome: "Teodoro", celular: 99999199 },
  { id: 4, nome: "Peixoto", celular: 32188899 },
  { id: 5, nome: "Mula", celular: 99828899 },
];

//rota para rota inválida
app.get("/", (request, response) => {
  return response.json("rota inválida");
});

//rota para a consulta do array
app.get("/pessoas", (request, response) => {
  return response.json(Pessoas);
});

//rota para POST em Pessoas
app.post("/pessoas", (req, res) => {
  const { nome, celular } = req.body;

  const pessoa = {
    id: randomUUID(),
    nome: nome,
    celular: celular,
  };
  Pessoas.push(pessoa);

  return res.json(Pessoas);
});

//Requisição PUT
app.put("/pessoas/:id", (req, res) => {
    const { id } = req.params; // Pegando o id da URL
    const { nome, celular } = req.body; // Pegando os novos valores do corpo da requisição
  
    // Encontrar o índice da pessoa pelo id
    const pessoaIndex = Pessoas.findIndex(p => p.id == id);
  
    if (pessoaIndex === -1) {
      return res.status(404).json({ message: "Pessoa não encontrada" }); // Retorna erro se não encontrar a pessoa
    }
  
    Pessoas[pessoaIndex] = {
      ...Pessoas[pessoaIndex], // Mantém os dados antigos
      nome: nome || Pessoas[pessoaIndex].nome, // Atualiza se for enviado
      celular: celular || Pessoas[pessoaIndex].celular // Atualiza se for enviado
    };
  
    return res.json(Pessoas); // Retorna a pessoa atualizada
  });

//  DELETE
app.delete("/pessoas/:id", (req, res) => {
    const { id } = req.params; // Pegando o id da URL
  
    // Encontrar o índice da pessoa pelo id
    const pessoaIndex = Pessoas.findIndex(p => p.id == id);
  
    if (pessoaIndex === -1) {
      return res.status(404).json({ message: "Pessoa não encontrada" }); // Retorna erro se não encontrar a pessoa
    }
  
    // Remover a pessoa do array
    Pessoas.splice(pessoaIndex, 1);
  
    return res.json({ message: "Pessoa removida com sucesso" }); // Retorna uma mensagem de sucesso
  });

app.listen(3000, () => console.log("Servidor rodando na porta: 3000"));
