class Pessoa {
  nome;
  idade;
}

const p1 = new Pessoa();
p1.nome = "João";
p1.idade = 29;

const p2 = new Pessoa();
p2.nome = "Pedro";
p2.idade = 29;

function compararIdade(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
  } else if (p1.idade < p2.idade) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
  } else {
    console.log(`${p2.nome} e ${p1.nome} tem a mesma idade.`);
  }
}

compararIdade(p1, p2);
