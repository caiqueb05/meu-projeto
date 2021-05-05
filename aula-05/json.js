let pessoa = {
    nome: "Caique",
    idade: 26,
    altura: 1.75
}

let listaCompras = ["pão", "presunto", "queijo"]

let json = JSON.stringify(listaCompras);
let arrayDeNovo = JSON.parse(json)

// let objetoDeNovo = JSON.parse(json);

console.log(arrayDeNovo)