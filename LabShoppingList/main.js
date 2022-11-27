import './style.css'
import { openWindow } from './openWindow';
import { inputPrice } from './inputPrice';


var lista = document.querySelector('#ul');
var lista2 = document.querySelector('#ul');

var produto = document.querySelector('#produto');
var botao = document.querySelector('#btn');




botao.addEventListener('click', addItem);
//const listProd = new Set([]);
var listProd = [];





// Verifica se lista de produtos está vazia se estiver pega os dados do LS.
if(listProd.length < 1){
    for(var i=0; i <= localStorage.length ; i++){
    listProd.push(localStorage.getItem(i));
    }
}

for( var i=1 ; i <= localStorage.length ; i++){
    const itemListProd = 
    ('<li id="li1"><input class="but3" type="checkbox" id='+listProd[i]
    +' name= '+ listProd[i]
    +' onclick= inputPrice()><label for='+listProd[i]
    +'><a id="popPrice" href="javascript:'+inputPrice
    +' inputPrice();">'
    + listProd[i] + 
    '</a><button id="btn2"  class="but2">X</button></label></li>');

    lista2.innerHTML = lista2.innerHTML + itemListProd;

}
    
    //  function deletaItem() {
    //      var del = confirm("Você tem certeza que deseja remover esse item?");
    //      if (del ===true)
    //      {
    //       localStorage.removeItem(2);   
    //          }
    //          document.location.reload(false)}



function addItem(){
    
// Validação numero caracteres.
    if((produto.value.length < 8)|(produto.value.length > 64)) {
        alert("Digite um produto com mais de 8 caracteres e menos de 64.")
    }else{

// Insere os dados na array.    
    listProd.push(produto.value);
    console.log(listProd.length)
    
// Inser os dados no localStorage.    
    for (var i=1; i < listProd.length ; i++){       
        localStorage.setItem( i , listProd[i]);
        }


    //  function deletaItem() {
    //      var del = confirm("Você tem certeza que deseja remover esse item?");
    //      if (del ===true)
    //      {
    //       localStorage.removeItem(2);   
    //          }
    //          document.location.reload(false)}

// Lista HTML. 

    

    const item = 
    ('<li><input class="but3" type="checkbox" id='+produto.value
    +' name= '+ produto.value
    +' ><label for='+produto.value
    +'><a id="popPrice" href="javascript:'+inputPrice
    +' inputPrice();">'
    + produto.value + 
    '</a><button id="btn" class="but2">X</button></label></li>');
    
    
    lista.innerHTML = lista.innerHTML + item;


    produto.value = '';
    produto.focus();
    openWindow();  

    
    console.log(listProd)
   
    
}
}

produto.addEventListener('keyup', function(e){
    if (e.keyCode === 13){
        addItem();
    }
})








//async function manipulaLista(){
    //     try{
    //     document.getElementById(produto.value).innerHTML = '<s>'+ produto.value + '</s>';

    //     }
    //     catch{
    //         console.log("Um erro aconteceu")
    //     }
    //     finally{
    //         console.log("Ok")
    //     }
    // }

    

    // function closeWindow(){
    // setTimeout(openWindow, 5000);
    // openedWindow.close();
    // }
    //closeWindow()