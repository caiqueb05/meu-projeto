let frutas = ["maçã", "banana", "uva"];

let frutasDois = ["laranja", "abacate", "goiaba"];

let listaCompleta = [...frutas, ...frutasDois]

// console.log(listaCompleta);

let pessoa = {
    nome: "Caique",
    idade: 27,
}

let infoPessoal = {
    tel: "12345678",
    rg: 23456789,
    ...pessoa
}

let pessoaCompleta = {
    endereco: "Rua dos bobos",
    ...infoPessoal
}

console.log(infoPessoal)

function letras(...paramns){

    console.log(paramns[1])

}

letras('a', 'b', 'c')