class Carro {
  marca;
  cor;
  gastoDaViagem;

  constructor(marca, cor, gastoDaViagem) {
    this.marca = marca;
    this.cor = cor;
    this.gastoDaViagem = gastoDaViagem;
    // this.marca = "Fiat Uno";
    // this.cor = "preto";
    // this.gastoDaViagem(100, 5, 6);
  }

  gastoDePercurso(distancia, precoDaGasolina) {
    return distancia * this.gastoDaViagem * precoDaGasolina;
  }
}

const uno = new Carro("Fiat", "Prata", 1 / 12);

console.log(
  `Na minha viagem com meu ${uno.marca} ${uno.cor} , gastei R$${uno.gastoDePercurso}
    .toFixed(2)}`
);
