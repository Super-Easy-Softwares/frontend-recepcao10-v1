function validateLogin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Por favor, preencha todos os campos.");
  } else {
    // Aqui você pode adicionar lógica para verificar o login no backend
    alert("Login bem-sucedido!");
  }
}
