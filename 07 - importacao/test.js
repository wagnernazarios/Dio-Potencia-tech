const formatter = Intl.NumberFormat("pt-br", { notation: "compact" });

const seguidores = 1000000000000;

console.log(formatter.format(seguidores));
