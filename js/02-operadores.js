/* Exemplo; calculo de IMC */

/*Dados de entrada da aplicação*/
let peso = 80;
let altura = 1.81;

/* Processamento de dados*/
let imc = peso / (altura ** altura);

// Saida 
console.log(`Peso: ${peso} kg`);
console.log(`Altura: ${altura}`);
console.log(`Resultado IMC: ${imc.toFixed(2)}`);

// To fixed serve para casas decimais 

let configuracoes = {
    style: 'currency',
    currency: 'BRL'
};

console.log("--------------");

let preco = 1000;
let desconto = 50
let valorfinal = preco - desconto;
console.log(
    `Preço: ${preco.toLocaleString('pt-br', configuracoes)}`
);
console.log(`Desconto: ${desconto.toLocaleString('pt-br', configuracoes)} `);

console.log(`Valor final: ${valorfinal.toLocaleString('pt-br', configuracoes)}`);