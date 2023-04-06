/* Objeto Estrutura de dados não-indexados
baseadas em pares compostos por uma chave e um valor e esses pares são conhecidos como propiedade e atributos. */

// Exemplo 1: Objeto simples

let livro = {
    //chave : valor
    titulo: 'Senhor dos Anéis', // propriedade
    ano: 1954,
    volumes: 3,
    autor: 'J.R.R. Tolkien'
};

console.log (livro.titulo);
console.log (livro.ano);
console.log (livro.autor);

console.log('-------------');



let pessoa = {
    nome: 'Ozzy Osbourne',
    idade: 70,
    telefones: ['11-2134-0300', '11-98888-0000'],
    endereço: {
        logradouro:  'Rua XYZ',
        numero: '211' ,
        bairro: 'Guapira',
        cidade: 'São Paulo'
    }
};

    




console.log ('------------')



let pedido = {
    codigo: "123abcd",
    produtos: ['smartphone', 'teclado', 'mouse'],
    data: "06/04/2023",
    preco: 4000.95,
    prazo: 7
}




console.log(`referente ao pedido ${pedido.codigo}, os produtos foram comprados em ${pedido.data} custando  ${pedido.preco}.
prazo de entrega é  ${pedido.prazo} dias úteis  `)



//crie um objeto chamado "pedido" contendo as seguintes irfomaçoes

//codigo (invente uma combinação de letras e numeros)
//lista de (3 produtos basta o nome de cada um)
//data do pedido (colque a data de hoje)
//preço
//prazo de entrega em dias

//Mostre no console uma frase contendo algumas das
//informaçoes do pedido. 
//exemplo: referente ao pedido 123xyz, os produtos foram comprados
//em 06/04/2023 custando 2023 custando 4500. o prazo de entrega é de 7 dias uteis

