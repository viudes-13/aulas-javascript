
console.log('------------')



/** ENTRADA DE DADOS (entrada via prompt) */
let nome = (prompt("irforme seu nome:")) ;
let idade = (prompt("irforme sua idade:")) ;


/**LOGICA DAS FAIXAS DE IDADE */

/* VERSAO SEM REFATORAÇÃO */
// if (idade >= 18 && idade < 60) {
//     alert(` ${nome}, voce é uma pessoa adulta`);
// }
// else if (idade >= 60) {
//     alert(` ${nome}, voce é uma pessoa idosa`);
// }
// else {
//     alert(` ${nome}, voce é uma pessoa menor de idade`);
// }
/** VERSAO COM REFATORAÇAO (melhorias) */
let mensagem; 
if (idade >= 18 && idade < 60) {
   mensagem = "adulta"
}
else if (idade >= 60) {
    mensagem = "idosa"
}
else {
    mensagem = "menor de idade"
}

alert(` ${nome}, voce é uma pessoa ${mensagem}`);







