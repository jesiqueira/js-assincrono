/*
Fecth API
Permite fazermos requisições HTTP através do método fetch().
Este método retorna a resolução de uma Promise. Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response.
*/

const doc = fetch("./doc.txt");

doc
  .then((resolucao) => {
    return resolucao.text();
  })
  .then((body) => {
    const conteudo = document.querySelector(".conteudo");
    conteudo.innerText = body;
  });

/*
.json
Um tipo de formato de dados muito utilizado com JavaScript é o JSON (JavaScript Object Notation), pelo fato dele possuir basecamente a mesma sintaxe que a de um objeto js. .json()
transforma um corpo em json em um objeto JavaScript
*/
