function calcular() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operacao = document.getElementById("operacao").value;
  var resultado = document.getElementById("resultado");

  if (operacao === "+") {
    resultado.textContent = "Resultado: " + (num1 + num2);
  } else if (operacao === "-") {
    resultado.textContent = "Resultado: " + (num1 - num2);
  } else if (operacao === "*") {
    resultado.textContent = "Resultado: " + (num1 * num2);
  } else if (operacao === "/") {
    if (num2 !== 0) {
      resultado.textContent = "Resultado: " + (num1 / num2);
    } else {
      resultado.textContent = "Erro: Divisão por zero.";
    }
  } else {
    resultado.textContent = "Operação inválida.";
  }
}