function divisao(numero1, numero2){
    let = resultado = parseFloat(numero1) / parseFloat(numero2);
    if(numero1 == 0 || numero2 == 0){
        alert("Não é possivel dividir por ZERO!")
    }else{
        document.querySelector("#res").innerHTML = resultado;
    }
   
}