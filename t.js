function convertCf(inp) {
    var inp = document.getElementById("num").value;
    var resultado = document.getElementById("resul");
    var lec = (inp * 9/5) + 32;
    resultado.innerHTML = lec;
  };