let nota1 = 6;
let nota2 = 8;
let nota3 = 7;

let media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
  console.log("Sua media é: " + media.toFixed(2) + "\nVocê repetiu de ano!");
} else if (media >= 5 && media <= 7) {
  console.log(
    "Sua media é: " + media.toFixed(2) + "\nVocê está de recuperação!"
  );
} else if (media > 7) {
  console.log("Sua media é: " + media.toFixed(2) + "\nVocê passou de ano!");
}
