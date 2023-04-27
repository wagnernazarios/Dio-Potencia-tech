const viagem = confirm(
  "Voce fará uma viagem, por isso responda as seguintes questões:"
);

const combustivel = prompt("Prefere abastecer com gasolina ou etanol?");

const kmPorLitro = prompt("Quantos litros por quilometros seu carro faz?");

const distanciaDaViagem = prompt("Quantos quilometros terá a viagem?");

if (combustivel == "etanol") {
  const precoDoEtanol = 4.35;
  const valorDoEtanolNaViagem = distanciaDaViagem / kmPorLitro;
  const gastoDaViagemComEtanol = valorDoEtanolNaViagem * precoDoEtanol;
  alert(
    "Valor gasto com etanol na viagem será de: R$" +
      gastoDaViagemComEtanol.toFixed(2)
  );
  console.log(
    "Valor gasto com etanol na viagem será de: R$" +
      gastoDaViagemComEtanol.toFixed(2)
  );
}

if (combustivel == "gasolina") {
  const precoDaGasolina = 5.79;
  const valorDaGasolinaNaViagem = distanciaDaViagem / kmPorLitro;
  const gastoDaViagemComGasolina = valorDaGasolinaNaViagem * precoDaGasolina;
  alert(
    "Valor gasto com gasolina na viagem será de: R$" +
      gastoDaViagemComGasolina.toFixed(2)
  );
  console.log(
    "Valor gasto com gasolina na viagem será de: R$" +
      gastoDaViagemComGasolina.toFixed(2)
  );
}
