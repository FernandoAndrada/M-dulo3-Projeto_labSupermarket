


export function inputPrice() {
    priceBuy =parseFloat(
        prompt('Insira o valor do produto escolhido:'));
        if((!priceBuy)){
            alert('Por favor digite um número!')
        }else{
            alert('voce digitou'+priceBuy);

            var precoAtual = (document.querySelector('span'));
            
            var precoNovo = ((precoAtual.textContent)+++(priceBuy));
            console.log(precoNovo);

            var listaPrice = document.querySelector('#price');

            
            var itemPrice = (`<span>${(precoNovo)}</span>`);

            

            listaPrice.innerHTML = itemPrice;
            
            

            
            
        }


        
        
}

