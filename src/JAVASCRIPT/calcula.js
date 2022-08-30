function calcula(){
  let numero1 = parseFloat(document.querySelector("#number1").value);
  let numero2 = parseFloat(document.querySelector("#number2").value);
  let operação = document.querySelector("#operacao").value;

  let resultado = '';
  
 resultado = calculadora(operação, numero1, numero2);


  document.querySelector("#res").innerHTML = resultado;
}

  function calculadora(operação, numero1, numero2){
      
    if(operação === "selecione"){
      alert("Nenhuma operação selecionada!!!");
    }
    if(operação === "soma"){
      return soma(numero1, numero2);
    }
    if(operação === "subtracao"){
      return subtracao(numero1, numero2);
    }
    if(operação === "divisao"){
      return divisao(numero1, numero2);
    }
    if(operação === "multiplicacao"){
      return multiplicacao(numero1, numero2);
    }

    }











 /*)
  let n1, n2, n3, oper

    n1 = document.querySelector("#num1").value;
    num1 = parseFloat(n1)
    n2 = document.querySelector("#num2").value;
    num2 = parseFloat(n2)

    oper = document.querySelector("#operacao").value;

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
        document.getElementById('res').style.color = 'green';
        document.querySelector("#res").innerHTML = n3
      }
      if(n3 < 0){
        document.getElementById('res').style.color = 'red';
        document.querySelector("#res").innerHTML = n3
      }
    //document.querySelector("#res").innerHTML ="Resultado: " + n3
  */
   
    