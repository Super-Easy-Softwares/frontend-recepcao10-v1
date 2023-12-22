function exibirCampos() {
  var buscaUsuario = document.getElementById("buscaUsuario");
  var camposAtualizacao = document.getElementById("camposAtualizacao");

  if (buscaUsuario.value !== "") {
    camposAtualizacao.style.display = "block";
  } else {
    camposAtualizacao.style.display = "none";
  }
}

function salvarAtualizacao() {
  // Lógica para salvar as atualizações
  alert("Atualizações salvas com sucesso!");
}

function cancelarAtualizacao() {
  // Lógica para cancelar a atualização
  var buscaUsuario = document.getElementById("buscaUsuario");
  var camposAtualizacao = document.getElementById("camposAtualizacao");

  buscaUsuario.value = "";
  camposAtualizacao.style.display = "none";
}

/* ... (código posterior) ... */
