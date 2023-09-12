function encontrarMaior() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    var resultado = document.getElementById("resultado");

    if (num1 >= num2 && num1 >= num3) {
        resultado.textContent = "O maior número é: " + num1;
    } else if (num2 >= num1 && num2 >= num3) {
        resultado.textContent = "O maior número é: " + num2;
    } else {
        resultado.textContent = "O maior número é: " + num3;
    }
}