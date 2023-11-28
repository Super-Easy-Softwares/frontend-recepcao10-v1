const form = document.querySelector("#form");
const nameInput = document.querySelector ("#name");
const sexoSelect = document.querySelector ("#sexo");
const adressInput = document.querySelector ("#adress");
const telefoneInput = document.querySelector ("#telefone");
const cidadeSelect = document.querySelector ("#cidade");
const idadeInput = document.querySelector ("#idade");
const religSelect = document.querySelector ("#relig");
const obsTextarea = document.querySelector ("#obs");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // verifica se os campos está vazio
    if(nameInput.value === "") {
        alert("Por favor, preencha um nome");
        return;
    }
    if(sexoSelect.value === "") {
        alert("Por favor, escolha uma opção");
        return;
    }
    if(adressInput.value === "") {
        alert("Por favor, preencha um endereço");
        return;
    }
    if(telefoneInput.value === "") {
        alert("Por favor, preencha um telefone");
        return;
    }
    if(cidadeSelect.value === "") {
        alert("Por favor, escolha uma opção");
        return;
    }
    if(idadeInput.value === "") {
        alert("Por favor, preencha uma idade");
        return;
    }
    if(religSelect.value === "") {
        alert("Por favor, escolha uma opção");
        return;
    }
    

    // se todos os campos estiverem preenchidos, envie o form
    form.submit();
});


//

