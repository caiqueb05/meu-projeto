// const { Console } = require("node:console");

// let carro = {
//     nome: "Fox",
//     ano: 2012,
//     ligar: function(){
//        // console.log("O carro " + this.nome + " está ligado")
//     }
// }

// // console.log(carro.nome + " E seu ano é: " + carro.ano)

// carro.ligar()

function Carro(nomeCarro, anoCarro){
    this.nome = nomeCarro;
    this.ano = anoCarro
}

let civic = new Carro("Civic", "2019")
let gol = new Carro("Gol", "2018")

console.log(gol);