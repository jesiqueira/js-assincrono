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

/*
Utilizando a API https://blockchain.info/ticker retorne no DOM o valor de compra da bitcoin and reais. Atualize este valor a cada 30s
*/

const btc = document.querySelector(".btc");

function fetchBtc() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((btcJson) => {
      // console.log(btcJson.BRL);
      btc.innerText = ('R$' + btcJson.BRL.buy).replace('.', ',');
    });
}

// setInterval(fetchBtc, 1000);
fetchBtc() 

/*
Utilizando a API https://api.chucknorris.io/jokes/random retorne uma piada randomica do chucknorris, toda vez que clicar em próxima

*/
const btnProxima = document.querySelector('.proxima')
const paragrafoPiada = document.querySelector('.piada')
btnProxima.addEventListener('click', puxarPiada)

function puxarPiada(){
  fetch('https://api.chucknorris.io/jokes/random ')
  .then(r => r.json())
  .then(piada => {
    // console.log(piada.value);
    paragrafoPiada.innerText = piada.value
  })
}


