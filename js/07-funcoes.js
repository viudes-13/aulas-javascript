/* funções personalizadas

- organização de lógica, com separação de responsabilidades
- reaproveitamento de codigo 

sintaxe 1 (tradicional)
função anonima/literal */
const exemplo1 = function(){
    // corpo da função (açoes)
    console.log("função anônima!")
}

/* Obs: para função fazer oque ela foir programada para fazer, algum momento ela precisa
ser "chamada/invocada" */

// chamada de função
exemplo1();

/* sintaxe 2 (tradicional) 
Função nomeada/declarada */
function exemplo2(){
    // corpo da função (açoes)
    console.log ("função nomeada!");
}

exemplo2();

/* sintaxe 3 (moderna/atual)
arrow function (função "flecha/seta") 

Obs.: esta é a sintaxe usada nos frameworks JS mais populares: react angular, vue, react native*/
const exemplo3 = () => {
    console.log("arrow function!")
}

exemplo3();

console.log("--------")

/* funçoes comparametros/argumentos parametros (ou argumentos) são dados passados para a função "entender" 
o que ela deve processar/fazer 

exemplo: uma função que calcule um frete precisa pelo menos de um parametro com o CEP do local de entrega. */

function login(usuario, senha){
/* base de dados
com usuario thiagoviudes e senha 123abc */
    if(usuario =="thiagoviudes" && senha == "123abc"){
    console.log("dados corretos,usuario entrou")
    }
    else { console.log ("dados incorretos, acesso bloqueado");

    }
}

login("thiagoviudes", "123abc");


console.log("--------")

function some(valor1, valor2){
    //variavel de escopo LOCAL
    let total = valor1 + valor2;
    return total;
}

let resultadoA = some(10, 500);
let resultadoB = some(5, 1200);
let resultadoC = some(8.9, 147.56);

console.log(resultadoA);
console.log(resultadoB);
console.log(resultadoC);

console.log("--------")


// function dobra(valor){

// return valor * 2;
// }


/* versao 2: sintaxe arrow function com return explicito */
// const dobra = (valor) => {
//     return valor * 2;
// };

/* versao 3: sintaxe arrow function com return implicito
 obs.:quando a arrow function possui somente UM parametro, voce pode omitir os parenteses. E se a arrow function faz apenas uma unica operação/retorno,
 voce trambem pode omitir as chaves e a palavra return.
 Na pratica, voce consegue criar uma função de uma unica limha com arrow function */
const dobra = valor => valor * 2;


let exemploDobra = dobra(10);
console.log(exemploDobra);

