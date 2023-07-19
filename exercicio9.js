let prompt = require("prompt-sync")();

let numero = parseInt(prompt("Escolha um numero:"))

while (numero >= 0) {
  console.log(numero);
  numero--;
}