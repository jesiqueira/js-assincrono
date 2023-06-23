/*
Fecth API
Permite fazermos requisições HTTP através do método fetch().
Este método retorna a resolução de uma Promise. Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response.
*/

// const doc = fetch("./doc.txt");
// const cep = fetch("https://viacep.com.br/ws/13571606/json");

// cep
//   .then((resolucao) => {
//     return resolucao.json();
//   })
//   .then((body) => {
//     // console.log(body);
//     const conteudo = document.querySelector(".conteudo");
//     conteudo.innerText = body.logradouro;
//   });

/*
.json
Um tipo de formato de dados muito utilizado com JavaScript é o JSON (JavaScript Object Notation), pelo fato dele possuir basecamente a mesma sintaxe que a de um objeto js. .json()
transforma um corpo em json em um objeto JavaScript
*/

/*
HTML e .text()
Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto e inserir em uma div com o innnerHTML. A partir dai podemos manipular esses dados com em DOW qualquer.
*/

// const sobre = fetch('./sobre.html')

// const div = document.createElement("div");

// sobre
// .then((r) => r.text())
// .then((body) => {
//   div.innerHTML = body;
//   const titulo = div.querySelector("h1");
//   document.querySelector("h1").innerText = titulo.innerText;
//   console.log(titulo);
// });

/*
.blob()
Um blob é um tipo de objeto utilizado oara representação de dados de um arquivo. O blob pode ser utilizado para transformarmos requisições de imagens por exemplo. O blob gera
um URL única.
*/
const imagem = fetch("./fauna.jpeg");

imagem
  .then((r) => r.blob())
  .then((body) => {
    const blobUrl = URL.createObjectURL(body);
    const imagemDom = document.querySelector("img");
    imagemDom.src = blobUrl;
  });
