function calc(num1,num2){
    
  let n1, n2, n3, oper

    n1 = document.querySelector("#num1").value;
    n1 = parseFloat(n1)
    n2 = document.querySelector("#num2").value;
    n2 = parseFloat(n2)

    oper = document.querySelector("#operacao").value;
   /* if(oper == "selecione"){

   }
   */
    if(oper == "soma") {
      n3 = parseFloat(n1) + parseFloat(n2);
    }
    if (oper == "subtracao"){
      n3 = parseFloat(n1) - parseFloat(n2);
    }
    if (oper == "divisao"){
      n3 = parseFloat(n1) / parseFloat(n2);
    }
    if(oper == "multiplicacao"){
      n3 = parseFloat(n1) * parseFloat(n2);
    }
    

    document.querySelector("#res").innerHTML ="Resultado: " + n3
    
}