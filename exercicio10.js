let prompt = require("prompt-sync")();

let numero = parseFloat(prompt("Digite um numero: ")) 

// while(numero != 0 ){
//     numero = parseFloat(prompt("Digite um numero")) 

// }

do{
    numero = parseFloat(prompt("Digite um numero: ")) 
} while (numero != 0)

console.log("O numero é zero")