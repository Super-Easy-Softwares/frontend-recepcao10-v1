// Função para mostrar o formulário de adição de visita
function showAddVisitForm() {
  var addVisitForm = document.getElementById("addVisitForm");
  addVisitForm.style.display = "block";

  // Mostrar o campo de data ao escolher um nome
  var visitDateContainer = document.getElementById("visitDateContainer");
  visitDateContainer.style.display = "block";
}

// Função para adicionar visita (pode ser personalizada conforme suas necessidades)
function addVisit() {
  // Lógica para adicionar visita
  alert("Visita adicionada com sucesso!"); // Exemplo simples, personalize conforme necessário
}
