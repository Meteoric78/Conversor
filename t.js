function convertCf(inp) {
    var inp = document.getElementById("num").value;
  //  var resultado = document.getElementById("resul");
  //  var lec = (inp * 9/5) + 32;
  //  resultado.innerHTML = lec;
  // comment lol
  var semP = inp * 9;
  var multP = semP / 5;
  var res = multP + 32;
  document.getElementById("p0").innerHTML = "Resolução:";
  document.getElementById("p1").innerHTML = "°F = (°C * 9 / 5) + 32";
  document.getElementById("p2").innerHTML = "°F = (" + inp + " * 9 / 5) + 32";
  document.getElementById("p3").innerHTML = "°F = (" + semP + " / 5) + 32";
  document.getElementById("p4").innerHTML = "°F = " + multP + " + 32";
  document.getElementById("p5").innerHTML = res;
  };