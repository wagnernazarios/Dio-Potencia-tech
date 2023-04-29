// faça um programa que calcule o valor de combustivel gasto numa viagem

// Você terá 3 variáveis. Sendo elas:

// 1 - Preço do combustivel;
// 2 - valor médio de gasto do carro;
// 3 - Distância em KM da viagem;

//imprima  no console o  valor que sera gasto de combustível para realizar esta viagem.

let precoDoCombustivel = 5.79;
let kmPorLitro = 12;
let distancia = 121;

let litrosConsumidos = distancia / kmPorLitro;
let valorGasto = litrosConsumidos * precoDoCombustivel;

console.log(valorGasto.toFixed(2));
