// const idadeDependende = Number(prompt("Qual a idade do seu dependente?"));

// if (idadeDependende >= 13 && idadeDependende <= 17) {
//   console.log(
//     "Seu dependente já pode ter um cartão de crédito vinculado ao seu."
//   );
// } else {
//   console.log("Consulte outras posibilidades do Labank.");
// }

// (idadeDependende===13) ? console.log("A idade do dependente é 13, já pode ter um cartão.") : console.log("Verifique as opções possíveis.")

const numero = Number(prompt("Digite um número:"));

if (numero % 2 === 0) {
  if (numero % 3 === 0) {
    console.log("O número é divisivel por 2 e por 3.");
  } else if (numero % 3 > 0) {
    console.log("O número é divisivel apenas por 2.");
  }
} else if (numero % 2 > 0) {
  if (numero % 3 === 0) {
    console.log("O número é divisivel apenas por 3.");
  } else if (numero % 3 > 0) {
    console.log("O número não é divisivel por 2 e nem por 3. ");
  }
}

console.log(
  "Número surpresa: " + (numero === 30 ? "Ufa Acertei!" : "Não foi dessa vez")
);

if (numero%3 === 0 && numero%2 ===0){
    switch (numero) {
  case 6:
    console.log("Boa tarde!");
    break;

  case 12:
    console.log("Boa tarde!");
    break;

  case 18:
    console.log("Boa noite!");
    break;

  case 24:
    console.log("Bem vindo!");
    break;

  case 30:
    console.log("Acertei o número surpresa.");

  default:
    console.log("Seu número não é menor que 6 e maior que 30.");
}
}
