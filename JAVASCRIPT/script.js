function calc(num1,num2){
    
  let n1, n2, n3, oper

    n1 = document.querySelector("#num1").value;
    n1 = parseFloat(n1)
    n2 = document.querySelector("#num2").value;
    n2 = parseFloat(n2)

    oper = document.querySelector("#operacao").value;
    // posso fazer um enquanto para as seleção para ficar um pouco menor!!

    //----OPERAÇÃO-----
    if(oper == "selecione"){
     alert("Nenhuma operação selecionada!!!");
    }
    if(oper == "soma") {
      n3 = parseFloat(n1) + parseFloat(n2);
    }
    if (oper == "subtracao"){
      n3 = parseFloat(n1) - parseFloat(n2);
    }
    if (oper == "divisao"){
      
       if(num1 == 0 || num2 == 0){
        alert("Não é possivel dividir por ZERO!")
       }
       n3 = parseFloat(n1) / parseFloat(n2);
      }
      if(oper == "multiplicacao"){
        n3 = parseFloat(n1) * parseFloat(n2);
      }
    
     //----NÚMERO NÃO SELECIONADO-----
    if(num1 == "" && num2 ==""){
      alert("Os campos de número estão em branco, Digite para Continuar!");
      }
      else if(num1 == ""){
        alert("Digite o 1 número para continuar");
      }
      else if(num2 == ""){
        alert("Digite o 2 número para continuar");
      }
      //-----VERDE E VERMELHO NÚMEROS------
      if(n3 > 0){
        document.getElementsByTagName("h2").style.color = 'green';
        document.querySelector("#res").innerHTML ="Resultado: " + n3
      }
    //document.querySelector("#res").innerHTML ="Resultado: " + n3
  
    }
    /*
    if(oper == "multiplicacao"){
      n3 = parseFloat(n1) * parseFloat(n2);
    }
  
    //----NÚMERO NÃO SELECIONADO-----
    if(num1 == "" && num2 ==""){
      alert("Os campos de número estão em branco, Digite para Continuar!");
    }
    else if(num1 == ""){
      alert("Digite o 1 número para continuar");
    }
    else if(num2 == ""){
      alert("Digite o 2 número para continuar");
    }
    
    document.querySelector("#res").innerHTML ="Resultado: " + n3
    */