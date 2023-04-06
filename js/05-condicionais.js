/*comandos condicionais
if (SE) / (SENÃO)

else if (SENÃO SE)
switch (escolha/analise) / case (CASO)

Operadores relacionais
> (MAIOR QUE)
< (MENOR QUE)
>=(MAIOR OU IGUAL)
<-(MENOR OU IGUAL)
==(IGUALDADE)
!=(DIFERENTE)
*/

// Exemplos

const aluno = "Chaves";
let nota1 = 10;
let nota2 = 5;
let falta = 7;
let media = (nota1 + nota2) / 2;

console.log(`Aluno(a):${aluno}`);
console.log(`Notas: ${nota1} e ${nota2}`);
console.log(`Média: ${media}`);


//critério de aprovação
const mediaMinima = 7;
const limiteDeFalta = 10;

if (media >= mediaMinima && falta < limiteDeFalta) {
    console.log("aprovado");
}
else {
    console.log("reprovado");
}

// condicional encadeada

// algoritmo para analise de desempenho

/* media menor que 3? PÉSSIMO
 media menor que 5? ruim
media menor que 7? regular
media menor que9? Bom // 
Nenhuma das anteriores? ótimo */

// variavel que ira armazenar o texto/desempenho */
// let desempenho; // começa indefinida

let desempenho;
if (media < 3) {
    desempenho = ("PÉSSIMO");
}
else if (media < 5) {
    desempenho = ("RUIM");
}
else if (media < 7) {
    desempenho = ("REGULAR");
}
else if (media < 9) {
    desempenho = ("BOM");
} else {
    desempenho = ("ÓTIMO");
}

console.log(desempenho);

console.log ('------------')

/*if / else de uma linha (shorthand if/else) */
let idade = 20;
/* let resultado;

if (idade >= 18){
    resultado = "maior"
}
else{ 
    resultado = "menor";
} 
*/
/* Versão abrevida do IF ELSE*/
let resultado = idade >= 18 ? 'maior' : 'menor';

console.log ( `A pessoa é ${resultado } de idade`);

console.log ('------------')

/* switch/case/break/default*/

/* Algoritmo de um chatbot
Opçoes:
1 -> pedir informaçoes
2 -> abrir reclamação
3 -> fazer um elogio
x -> falar com atende humano
*/
let opcao = parseInt(prompt('Digite 1, 2 ou 3') );
let mensagem;

switch (opcao){
    case 1: mensagem = "Ok, o que quer saber?"
    break;

    case 2:
        mensagem = "Puxa, que pena. O que houve?"
    break;

    case 3: 
    mensagem = "Bacana! Conte-me : "
    break;

    default:
        mensagem = "Não entendi... vou chamar alguem!"
        break;

}

console.log(`Opção escolhida: ${opcao}`);
console.log(mensagem);

