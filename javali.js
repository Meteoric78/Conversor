

function convertFc(input) {
  var input = document.getElementById("num").value;
  var resultado = document.getElementById("resul");
 var cel = (input - 32) * 5 / 9;
 resultado.innerHTML = cel;

   };
