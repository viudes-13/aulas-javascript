/* Métodos / funçoes 
de acesso / seleção do DOM 

-document.getElementeById("indentificador")
/* permite acessar/selecionar UM elemente no DOM
desde que ele esteja com um atributo "id" */

/*-document.querySelector("seletor qualquer")
permite acessar/selecionar UM elemento no DOM atraves de um seletor CSS.*/

/*-documentSelectorAll(seletor/res qualquer)
permite acessar / selecionar UM ou MAIS ELEMENTOS
no DOM atraves de um ou mais seletores CSS./

/* Exemplo */

// Exemplo 1: getElementById()
const titulo = document.getElementById('exemplo1')

console.log(titulo);

//modificandxo o conteudo dinamicamente
titulo.textContent = "Brincando com JS!"

//"injetando" CSS inline
titulo.style.color = "red";
titulo.style.textAlign = "center"
titulo.style.backgroundColor = "yellow"

//exemplo 2: querySelector
const exemplo2 = document.querySelector("h2");
console.log(exemplo2);

// adicionando classe CSS via JS
exemplo2.classList.add("destaque.item");

//exemplo 3: queryselectorALL
const links = document.querySelectorAll("li a");
console.log(links);

/* na pratica, o resultado do querySeletorAll SEMPRE
será um ARRAY (ou nodelist) */


//aplique o atributo target="black" aos links selecionador
for(let link of links)
    link.setAttribute("target","_blanck");


