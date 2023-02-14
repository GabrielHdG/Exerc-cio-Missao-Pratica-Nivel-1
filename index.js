let numero1 = prompt("Insira um número inteiro positivo");
let numero2 = prompt("Insira outro número inteiro positivo");

if (numero1 && numero2 < 0) {
  alert("Números não positivos, insira novamente");
  window.location.reload();
}

let numeros = [];

numeros.push(numero1, numero2);

let divisao = numeros[0] / numeros[1]; //só pro vetor não ficar inútil

alert("Divisão dos dois números: " + divisao);

//Poderia ter feito com funções mas não vi necessidade
