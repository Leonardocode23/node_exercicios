let prompt = require("prompt-sync")();


// let fibonacci = [0,1];

// for (let contador =2; contador < 10; contador++){
//     fibonacci [contador] = fibonacci [contador - 1] + fibonacci [contador -2];
// }

// for (let contador =0; contador <10; contador++){
//     console.log(fibonacci[contador]);
// }

let Anterior = 0
let Atual = 1

console.log(Anterior)
console.log(Atual)

for(let contador = 3; contador <= 10; contador++){
    let novo = Anterior + Atual

    console.log(novo)
    
    Anterior = Atual
    Atual = novo
}





