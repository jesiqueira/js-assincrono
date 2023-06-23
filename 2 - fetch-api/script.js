/*
Utilizando a API https://viacep.com.br/ws/${CEP}/json crie um formulário onde o usuário pode digitar o cep
e o endereço completo é retornado ao clicar em buscar
*/
const inputCep = document.getElementById("cep");
const btnCep = document.getElementById("btnCep");
const resultadoCep = document.querySelector(".resultadoCep");

btnCep.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  // console.log(event.target);
  // console.log(inputCep.value);
  buscaCep(inputCep.value);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then((response) => response.text())
    .then((body) => {
      resultadoCep.innerText = body;
    });
}

// buscaCep(13571606);

/*
Utilizando a API https://blockchain.info/ticker retorne no DOM o valor de compra da bitcoin and reais. Atualize este valor a cada 30s


*/

/*
Utilizando a API https://api.chucknorris.io/joker/random retorne uma piada randomica do chucknorris, toda vez que clicar em próxima

*/
