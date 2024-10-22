//request do middleware para usar id dinamico   
const { randomUUID } = require("crypto");
const express = require("express");
const app = express("express");


//mmiddleware para quando receber uma requisição json que vem do body para tratar ele bonitinho
app.use(express.json());
//array
const produtos = [
  { id: 1, nome: "Produto 1", preco: 100 },
  { id: 2, nome: "Produto 2", preco: 200 },
  { id: 3, nome: "Produto 3", preco: 300 },
  { id: 4, nome: "Produto 4", preco: 400 },
  { id: 5, nome: "Produto 5", preco: 500 },
];

//rotas get
// app.get("/produto", (request, response) => {
//   return response.json(produtos);
// });

// app.get("/", (request, response) => {
//   return response.json("rota inválida");
// });

// //rotas post com id não dinâmico
// app.post('/produto', (req, res) => {
//     const { nome, preco } = req.body;
//     const id = "asd";
//     produto = {
//         id: id,
//         nome: nome,
//         preco: preco
//     }
//     produtos.push(produto);
//     //retorna o array
//     return res.json(produtos);
// });

//rotas post com id dinâmico (necessário rendaluuid)
// app.post('/produto', (req, res) => {
//     const { nome, preco } = req.body;

//     produto = {
//         id: randomUUID(),
//         nome: nome,
//         preco: preco
//     }
//     produtos.push(produto);
//     //retorna o array
//     return res.json(produtos);
// });

//referencia ao usuario controler
// const UsuarioController = require{'./UsuarioController'};


//comeca o server
app.listen(3001, () => console.log("server running on port 3001"));
