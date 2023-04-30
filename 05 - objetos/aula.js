const wagner = {
  nome: "Wagner Nazario",
  idade: 29,
  DescrevaSe: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  },
};

wagner.altura = 1.82;

// delete wagner.idade;

wagner.DescrevaSe();
