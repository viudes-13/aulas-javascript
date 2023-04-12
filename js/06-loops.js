/* Loops )ou estruturas / laços de repetição

tradicionais: while, do/while, for 
Especificos: for/of, for/in

exemplo 1: while (enquanto)

DEIXAR SALVAMENTO AUTO-SAVE DESLIGADO PARA EVITAR BUG
*/

/** Variavel de controle de repetição 
 * este loop SOMENTE funicionara se a condição for verdadeira
*/
// let contador = 1

// while (contador <= 4) {
//     console.log(`Valor de contador: ${contador}`);
    // contador++; /**incremento */

    // contador = contador + 1; } //

    /* MENOS USADO!!! */
    /* exemplo 2: do/while (faça/enquanto) 
    este loop funfionara SEMPRE no minimo uma vez, não importando a condição */ 

//     let contador = 10;
// do {
//     console.log(`Contador vale ${contador}`);
//     contador++;
// }   while (contador <=5 );

/* Exemplo 3: for (para) */
// let i = 0;

// for (variavel de AbortController; condição; atuaçização){// }
// for(let i = 1; i <= 5; i++){
// console.log(`valor de i: ${i}`);
// }

/* Exemplo 4: loop com array */
const alunos = [
    "thiago", "raphael","camilla","kiko","chaves",
    "ricardo","valesca","kayky","vinicius","lucas",
];
  /* Nomes: */

  /* guardando o tamanho/comprimento do array*/ 
  let quantidade = alunos.length;

for(let i = 0; i < 70; i++){
    console.log(`nome: ${alunos[i]}`);
}

console.log ("---------")

/* for/of para de/do */
console.log("--Resultado usando fro/of--")

/* for/for é uma sintaxe exclusiva (e mais simples)
para manipulação de dados de um array */
for(let aluno of alunos){
    console.log (`nome: ${aluno}`);
}

console.log ("---------")

/* for/in: sintaxe exclusiva para manipulação
de dados de um objeto */
let pessoa = {
    nome: "Thiago",
    idade: 19,
    cidade: "São Paulo"

};

for( let dados in pessoa ){
    /* exibe somente o nome das props. */
    // console.log(dados);
    
        /* exibe os dados de cada  pros. */
    // console.log(pessoa[dados]);

    console.log(
        `${dados}: ${pessoa[dados]}`
    )
}