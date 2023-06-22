// const promesa = new Promise((resolve, reject) => {
//   let condicao = true;
//   if (condicao) {
//     setTimeout(() => {
//       resolve({ nome: "edmar", idade: 38 });
//     }, 1000);
//   } else {
//     reject("Um erro ocorreu na promise");
//   }
// });

/*
then()
O poder das Promises está no método then() do seu protótipo. O Callback desde método só será ativado quando a promise for resolvida. O argumento do callback será o valor passado na função
resolve
*/

// const retorno = promesa
//   .then((resolucao) => {
//     // console.log(resolucao)
//     resolucao.profissao = "Analista";
//     return resolucao;
//   })
//   .then((resolucao) => {
//     resolucao.salario = 1526;
//     return resolucao;
//   })
//   .then((resolucao) => {
//     console.log(resolucao);
//   })
//   .catch((rejeitado) => {
//     // console.log('CAT');
//     console.log(rejeitado);
//   })
//   .finally(() => {
//     console.log("Executando Finally");
//   });
// console.log(retorno);

/*
Assíncrono
As promeses não fazem sentido quando o código executado dentro da mesma é apenas código sincrono. O poder está na execução de código assíncrono
que executará o resolve() ao final dele.
*/

/*
then().then()
o método then() retorna outra Promise. Podemos colocar then() após then() e fazer um encadeamento de promessas.
O valor do primeiro argumento de cada then, será o valor do retorno anterior
*/

/*
catch()
o Método catch(), do protótipo de Promises, adiciona um callback a promise que será ativada caso a mesma seja rejeita
*/

/*
finally()
Executará a função anônima assim que a promessa acabar. A diferença do finally é que ele será executado independente do resultado, se for resolvido ou rejeitado.
*/

/*
-------Methods para promise--------
Retornará uma nova promise assim que todas as ori=omises dentro deka forem resolvidas ou pelo menos uma rejeitada. A resposta é uma array com as respostas de  cada promise.
*/

/*
Promesse.race()
Retonrá uma nova promise assim que a primeira promise dor resolvida ou rejeita. essa nova promise terá a resposta da primeira resolvida
*/

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuário logado");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados do usuário logado");
  }, 1500);
});

// const carregouTudo = Promise.all([login, dados]);
const carregouTudo = Promise.race([login, dados]);

carregouTudo.then((resolvido) => {
  console.log(resolvido);
});
