console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if(maiorDeIdade >= 18){
    console.log("Comprar maior de idade");
    listaDeDestinos.splice(1,1); // removendo item
}else{
    //A pessoa é menor de idade
    console.log("Não é maior de idade e não vender ");
}


console.log(listaDeDestinos);

console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18);