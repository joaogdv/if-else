function verificarNumero() {
  var numero = document.getElementById("numero").value;
  numero = parseFloat(numero);
  var resultado = document.getElementById("resultado");

  if (numero > 0) {
      resultado.textContent = "O número é positivo.";
  } else if (numero < 0) {
      resultado.textContent = "O número é negativo.";
  } else {
      resultado.textContent = "O número é igual a zero.";
  }
}
