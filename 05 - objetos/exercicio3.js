class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc() {
    return this.peso / (this.altura * this.altura);
  }
}
const jose = new Pessoa("Jose", 70, 1.75);

console.log(jose.calcularImc());

const wagner = new Pessoa("Wagner", 100, 1.82);

console.log(wagner.calcularImc());
