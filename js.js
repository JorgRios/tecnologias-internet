function entrar() {
  alert('Se ha iniciado sesion como '+document.getElementById('username').value)
  document.getElementById("bienvenida").innerHTML = "Bienvenido <h3>" + document.getElementById('username').value+"</h3>"
}

function bolAdol() {
  var bs = document.getElementById('bob').value
  var res = bs/6.96;
  document.getElementById("usd").value = Number(res).toFixed(2)
}

function dolAbol() {
  var usd = document.getElementById('usd').value;
  var res = usd*6.96;
  document.getElementById("bob").value = Number(res).toFixed(2)
}

function clean() {
  document.getElementById("bob").value = "";
  document.getElementById("usd").value = "";
}
