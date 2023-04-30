function escrevaMeuNome(nome) {
  return "Meu nome é: " + nome;
}

//Maior ou menor de idade
function classificarIdade(idade) {
  if (idade < 18) {
    return "Menor de idade!";
  } else {
    return "Maior de idade!";
  }
}

// console.log(escrevaMeuNome("Wagner, e sou ") + classificarIdade(22));

//---------------------------------------------------
// Pagamento

function aplicarDesconto(valor, desconto) {
  return valor - valor * (desconto / 100);
}

function aplicarJuros(valor, juros) {
  return valor + valor * (juros / 100);
}

const valorDeEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
  console.log(aplicarDesconto(valorDeEtiqueta, 10));
} else if (formaDePagamento === 2) {
  console.log(aplicarDesconto(valorDeEtiqueta, 15));
} else if (formaDePagamento === 3) {
  console.log(valorDeEtiqueta);
} else {
  console.log(aplicarJuros(valorDeEtiqueta, 10));
}

// function metodoDePagamento(preco, formaDePagamento) {
//   if (formaDePagamento === 1) {
//     return preco - preco * 0.1;
//   } else if (formaDePagamento === 2) {
//     return preco - preco * 0.15;
//   } else if (formaDePagamento === 3) {
//     return preco;
//   } else {
//     return preco + preco * 0.15;
//   }
// }

// console.log(metodoDePagamento(200, 2));
