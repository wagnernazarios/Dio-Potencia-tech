/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoNormal = 50;
const metodoDePegamento = "a vista";
const condicaoDePegamento = 3;

if (metodoDePegamento == "debito" && condicaoDePegamento < 2) {
  const valorPago = precoNormal * 0.1;
  console.log("valor pago com desconto será de: R$" + valorPago.toFixed(2));
} else if (metodoDePegamento == "a vista") {
  const valorPago = precoNormal * 0.15;
  console.log("valor pago com desconto de será de: R$" + valorPago.toFixed(2));
} else if (metodoDePegamento == "debito" && condicaoDePegamento == 2) {
  const valorPago = precoNormal;
  console.log("valor pago será de: R$" + valorPago.toFixed(2));
} else if (metodoDePegamento == "debito" && condicaoDePegamento > 2) {
  const valorPago = precoNormal + 10;
  console.log("valor pago com juros de 10% será de: R$" + valorPago.toFixed(2));
}
