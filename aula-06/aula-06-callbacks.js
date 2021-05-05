// const somar = (numeroA, numeroB) => numeroA + numeroB;

// const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);

// console.log(calculadora(10, 20, (somar)))
// console.log(calculadora(10, 20, (numeroA, numeroB) => numeroA-numeroB))

const dobro = (numeroA) => numeroA * 2;
const triplo = (numeroA) => numeroA * 3;

const calculadora = (numeroA, operacao) => operacao(numeroA);

console.log(calculadora(10, (triplo)))
//console.log(calculadora(10, 20, (numeroA, numeroB) => numeroA-numeroB))