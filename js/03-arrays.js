/* Array
Relação de dados indexados.Relação
Tambem conhecido como vetores ou matrizes 

Finalidade deste recurso é armazenar 
uma série de dados num mesmo espaço
de memoria */

// Exemplos

let alunos = ["Raphael", 'Thiago', 'Kayky'];

console.log(alunos);

//acessando o dado pelo indice
console.log(alunos[1]); //Thiago
console.log(alunos[0]); // Raphael

//crie um array com uma lista de 5 comidas que voce mais gosta
// exiba no console uma mensagem dizendo qual o nome da terceira e da ultima comida. // 

let comidas = ['lasanha', 'feijoada', 'japonesa' ,'macarrão ','hamburgue']

console.log(comidas);

console.log(comidas[2]);
console.log(comidas[4]);

console.log(`Gosto mais da comida ${comidas[2]}`)
console.log(`minha comida preferida é ${comidas[4]}`)

console.log('----------');

//matriz de 2 dimensoes 
let tecnologias = [
    ['HTML','CSS','JS'],
   ['PHP','Node','Java','SQL'] ,
   ['Figma','Photoshop']
];

console.log(tecnologias);

console.log(tecnologias[0][2]); 
console.log(tecnologias[1][3]); 
console.log(tecnologias[2][1]); 






