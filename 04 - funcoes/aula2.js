function escrevaMeuNome(nome) {
  return "Meu nome é: " + nome;
}

function classificarIdade(idade) {
  if (idade < 18) {
    return "Menor de idade!";
  } else {
    return "Maior de idade!";
  }
}

// console.log(escrevaMeuNome("Wagner, e sou ") + classificarIdade(22));

//---------------------------------------------------

function metodoDePagamento(preco, formaDePagamento) {
  if (formaDePagamento === 1) {
    return preco - preco * 0.1;
  } else if (formaDePagamento === 2) {
    return preco - preco * 0.15;
  } else if (formaDePagamento === 3) {
    return preco;
  } else {
    return preco + preco * 0.15;
  }
}

console.log(metodoDePagamento(200, 4));
