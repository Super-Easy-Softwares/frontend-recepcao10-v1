function validateLogin() {
  // Resetando mensagens de erro
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  // Removendo a classe de destaque dos campos
  document.getElementById("email").classList.remove("error-field");
  document.getElementById("password").classList.remove("error-field");

  // Obtendo valores dos campos
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();

  // Validando se os campos estão vazios
  if (email === "") {
    document.getElementById("email").classList.add("error-field");
    document.getElementById("emailError").textContent = "Preencha este campo";
  }

  if (password === "") {
    document.getElementById("password").classList.add("error-field");
    document.getElementById("passwordError").textContent =
      "Preencha este campo";
  }

  // Verificando se não há erros
  if (email !== "" && password !== "") {
    // Realizar outras verificações ou ações conforme necessário
    redirectToOptions();
  }
}

function redirectToOptions() {
  // Redirecionar para a página options.html
  window.location.href = "options.html";
}
