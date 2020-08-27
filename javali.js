

function convertFc(input) {
 // Pega o número inserido, calcula usando a fórmula e exibe o resultado 
    var input = document.getElementById("num").value;
 // var resultado = document.getElementById("resul");
 // var cel = (input - 32) * 5 / 9;
 // resultado.innerHTML = cel;
 // Exibe passo a passo da conta
  var semP = input - 32;
  var multP = semP * 5;
  var res = multP / 9;
  document.getElementById("p0").innerHTML = "Resolução:";
  document.getElementById("p1").innerHTML = "°C = (°F - 32) * 5 / 9";
  document.getElementById("p2").innerHTML = "°C = (" + input + " - 32) * 5 / 9";
  document.getElementById("p3").innerHTML = "°C = " + semP + " * 5 / 9";
  document.getElementById("p4").innerHTML = "°C = " + multP + " / 9";
  document.getElementById("p5").innerHTML = res;
   };
