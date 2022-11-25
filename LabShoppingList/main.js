import './style.css'
import { openWindow } from './openWindow';

var lista = document.querySelector('#ul');
var produto = document.querySelector('#produto');
var botao = document.querySelector('#btn');




botao.addEventListener('click', addItem);




function addItem(){

    var item = 
    ('<li><input class="but3" type="checkbox" '+ 
    +' id='+produto.value
    +' name= '+ produto.value
    +' ><label for='+produto.value
    +'>'
    + produto.value + 
    '<button id="btn" class="but2">X</button></label></li>');

    console.log(item);

    async function manipulaLista(){
        try{
        document.getElementById(produto.value).innerHTML = '<s>'+ produto.value + '</s>';
        }
        catch{
            console.log("Um erro aconteceu")
        }
        finally{
            console.log("Ok")
        }
    }
    
    // var item = '<li>' + produto.value + '</li>';

    if((produto.value.length < 8)|(produto.value.length > 64)) {
        alert("Digite um produto com mais de 8 caracteres e menos de 64.")
    }else{
    

    lista.innerHTML = lista.innerHTML + item;
    produto.value = '';
    produto.focus();
    openWindow();  
}
}

produto.addEventListener('keyup', function(e){
    if (e.keyCode === 13){
        addItem();
    }
})


    

    // function closeWindow(){
    // setTimeout(openWindow, 5000);
    // openedWindow.close();
    // }
    //closeWindow()