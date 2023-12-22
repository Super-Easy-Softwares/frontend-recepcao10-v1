function mostrarDetalhes(opcao) {
  var opcaoSelecionada = document.getElementById(opcao).value;
  var detalhesContainer = document.getElementById("detalhes" + opcao);

  if (opcaoSelecionada === "sim") {
    detalhesContainer.style.display = "block";
  } else {
    detalhesContainer.style.display = "none";
  }
}

function cadastrarVisitante() {
  // Aqui você pode adicionar lógica para processar os dados do formulário
  alert("Visitante cadastrado com sucesso!");
}
