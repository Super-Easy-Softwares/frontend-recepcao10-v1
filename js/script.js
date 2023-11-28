const form = document.querySelector ("#form");
const nameInput = document.querySelector ("#name");
const telInput = document.querySelector ("#tel");
const adressInput = document.querySelector ("#adress");
const dateInput = document.querySelector ("#date");
const sexSelect = document.querySelector ("#sex");
const ageInput = document.querySelector ("#age");
const citySelect = document.querySelector ("#city");
const religionSelect = document.querySelector ("#religion");
const flexRadioDefaultInput = document.querySelector ("#flexRadioDefault");
const flexRadioDefault2Input = document.querySelector ("#flexRadioDefault2");
const batismInput = document.querySelector ("#batism");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // VERIFICA SE O NOME ESTÁ VAZIO
    if(nameInput.value === "") {
        alert("Preencha um nome!");
        return;
    }

    // VERIFICA SE O TELEFONE ESTÁ VAZIO
    if(telInput.value === "") {
        alert("Preencha um telefone válido!");
        return;
    }

    // VERIFICA SE O ENDEREÇO ESTÁ VAZIO
    if(adressInput.value === "") {
        alert("Preencha um endereço!");
        return;
    }

    // VERIFICA SE A DATA DE VISITA FOI ESCOLHIDA
    if(dateInput.value === "") {
        alert("Escolha a data da visita!");
        return;
    }

    // VERIFICA SE HOUVE MARCAÇÃO DE SEXO
    if(sexSelect.value === "Sexo") {
        alert("Escolha um gênero!");
        return;
    }

    // VERIFICA SE A IDADE ESTÁ VAZIA
    if(ageInput.value === "") {
        alert("Selecione a idade!");
        return;
    }

    // VERIFICA SE A CIDADE FOI SELECIONADA
    if(citySelect.value === "Cidade") {
        alert("Selecione a cidade!");
        return;
    }

    // VERIFICA SE A RELIGIÃO FOI SELECIONADA
    if(religionSelect.value === "Religião") {
        alert("Selecione a religião do visitante!");
        return;
    }

    // VERIFICA SE A QUESTÃO 01 FOI RESPONDIDA
    if(flexRadioDefaultInput.value === "") {
        alert("Responda se o visitante participa de algum pequeno grupo!");
        return;
    }

    // VERIFICA SE A QUESTÃO 02 FOI RESPONDIDA
    if(flexRadioDefault2Input.value === "") {
        alert("Responda se o visitante faz estudo bíblico!");
        return;
    }

    // SE TODOS OS CAMPOS ESTIVEREM CORRETOS, ENVIE O FORM
    form.submit();
})