let prompt = require("prompt-sync")();

let idade = parseInt(prompt("Qual sua idade:"))

while (idade < 18){
    idade = parseInt(prompt("Qual sua idade:"))
}
     console.log("Voce é maior de idade!!")
