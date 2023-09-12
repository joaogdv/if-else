function verificarSenha() {
  var senhaArmazenada = "1234";
  var senhaInserida = document.getElementById("senha").value;
  var resultado = document.getElementById("resultado");

  if (senhaInserida === senhaArmazenada) {
      resultado.textContent = "Login bem-sucedido.";
  } else {
      resultado.textContent = "Senha incorreta. Tente novamente.";
  }
}