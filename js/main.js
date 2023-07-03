import {pecas} from "../modules/Pecas.js"

const controle = document.querySelectorAll("[data-controle]"); //seleciona todos os data attributes de nome
//'controle' em um array
const estatisticas = document.querySelectorAll("[data-estatistica]");

controle.forEach((element) => {
  element.addEventListener("click", (evento) => {
    const operacao = evento.target.dataset.controle;
    //atribuir + ou - na variavel operacao, dependendo de qual node for clicado.

    const quantidadeDePecas = evento.target.parentNode.querySelector("[data-contador]");
    //quantidadeDePecas encontra o elemento html responsavel por guardar o valor de pecas adicionadas ou subtraidas

    atualizaEstatisticas(evento.target.dataset.peca, operacao, quantidadeDePecas);
    manipulaDados(operacao, quantidadeDePecas); //chamado da funcao 'manipula dados' passando o value do 'data-controle' e o pai do 'data-controle'

    //IMPORTANTE --- 'atualizaEstatisticas' deve vir antes de m'anipulaDados'

    // As duas funções "manipulaDados" e "atualizaEstatisticas", manipulam o mesmo data-attribute "[data-contador]";
    // Elas são chamadas no mesmo evento de click, e na ordem em que são declaradas;
    // Quando se coloca a primero a função "manipulaDados", ela altera o valor em "-1" ou "+1" do "[data-attribute]", que é atribuída a constante "quantidadeDePecas";
    // Veja no console.log nas linhas 30 e 43, a constante "contadorDePecas" é sempre uma valor maior ou menor do que a constante "peca";
    // O que faz que quando entramos na condicional da linha linha 49 dentro da função "atualizaEstatisticas" ele já está com valor "0", por isso não faz a última subtração;
    // Então a resolução é chamar a função "atualizaEstatistica" antes da função "manipulaDados", ou seja pelo menos uma linha acima
  });
});

function manipulaDados(operacao, contadorDePecas) {
  //console.log(contadorDePecas.value);
  if (operacao === "-") {
    if (contadorDePecas.value > 0) {
      contadorDePecas.value = parseInt(contadorDePecas.value) - 1;
    } else {
      contadorDePecas.value = 0;
    }
  } else {
    contadorDePecas.value = parseInt(contadorDePecas.value) + 1;
  }
}

function atualizaEstatisticas(peca, operacao, quantidadeDePecas) {
  //console.log(quantidadeDePecas.value);
  if (operacao === "+") {
    estatisticas.forEach((elemento) => {
      elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    });
  } else {
    if (quantidadeDePecas.value > 0) {
      estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
      });
    }
  }
}
