// const wagner = {
//   nome: "Wagner Nazario",
//   idade: 29,
//   //método
//   DescrevaSe: function () {
//     console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//   },
// };

// wagner.altura = 1.82;

// delete wagner.idade;

// wagner.DescrevaSe();

//-----------------------

//classes

class Pessoa {
  nome;
  idade;
  anoDenascimento;

  //Caso a instanciação não tenha sido definidada, ela passa pelo construtor
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDenascimento = 2023 - idade;
  }

  descrevaSe() {
    console.log(
      `Meu nome é ${this.nome} e minha idade é ${this.idade} e nasci em ${this.anoDenascimento}`
    );
  }
}

const wagner = new Pessoa("Wagner", 29);

wagner.descrevaSe();
