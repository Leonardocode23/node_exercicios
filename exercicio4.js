let prompt = require("prompt-sync")();

let numero = parseInt(prompt("Escolha um numero de 1 a 10: "))

for(let contador = 0; contador <=10;contador++ ){
    let resultado = contador *  numero

    console.log( numero + "x " + contador + " = " +  resultado )
    
}