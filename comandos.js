
function add(){

let novo_elemento = document.createElement('textarea')
novo_elemento.className = "card-childen";
let  elemento = document.querySelector(".card-childen")
elemento.appendChild(novo_elemento  );

}

add()




function dele(){
let remove_tarefa = document.querySelector('textarea ');
remove_tarefa.remove("novo_elemento  " );

    

}




dele()



function crea(){
let pega = document.querySelector(".card-childen");


}