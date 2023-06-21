const promesa = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: "edmar", idade: 38 });
    }, 1000);
  } else {
    reject("Um erro ocorreu na promise");
  }
});

/*
then()
O poder das Promises está no método then() do seu protótipo. O Callback desde método só será ativado quando a promise for resolvida. O argumento do callback será o valor passado na função
resolve
*/

const retorno = promesa
  .then((resolucao) => {
    // console.log(resolucao)
    resolucao.profissao = "Analista";
    return resolucao;
  })
  .then((resolucao) => {
    resolucao.salario = 1526;
    return resolucao;
  })
  .then((resolucao) => {
    console.log(resolucao);
  })
  .catch((rejeitado) => {
    console.log(rejeitado);
  });
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
