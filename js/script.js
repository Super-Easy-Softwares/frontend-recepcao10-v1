const form = document.querySelector ("#form");
const nameInput = document.querySelector ("#name");
const name2Input = document.querySelector ("#name2");
const phoneInput = document.querySelector ("#phone");
const addressInput = document.querySelector ("#address");
const dateInput = document.querySelector ("#date");
const genderSelect = document.querySelector ("#gender");
const ageInput = document.querySelector ("#age");
const cityAndStateInput = document.querySelector ("#cityAndState");
const religionInput = document.querySelector ("#religion");
const smallGroupInput = document.querySelector ("#smallGroup");
const bibleStudyInput = document.querySelector ("#bibleStudy");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // VERIFICA SE O NOME ESTÁ VAZIO
    if(nameInput.value === "") {
        alert("Preencha um nome!");
        return;
    }

    // VERIFICA SE O TELEFONE ESTÁ VAZIO
    if(phoneInput.value === "") {
        alert("Preencha um telefone válido!");
        return;
    }

    // VERIFICA SE O ENDEREÇO ESTÁ VAZIO
    if(addressInput.value === "") {
        alert("Preencha um endereço!");
        return;
    }

    // VERIFICA SE O CAMPO CIDADE E ESTADO ESTÁ VAZIO
    if(cityAndStateInput.value === "") {
        alert("Preencha cidade e estado!");
        return;
    }

    // VERIFICA SE A IDADE ESTÁ VAZIA
    if(ageInput.value === "") {
        alert("Selecione a idade!");
        return;
    }


    // VERIFICA SE O CAMPO CIDADE E ESTADO ESTÁ VAZIO
    if(cityAndStateInput.value === "") {
        alert("Preencha cidade e estado!");
        return;
    }
   
    // VERIFICA SE O CAMPO CIDADE E ESTADO ESTÁ VAZIO
    if(cityAndStateInput.value === "") {
        alert("Preencha cidade e estado!");
        return;
    }

    // VERIFICA SE HOUVE MARCAÇÃO DE GêNERO
    if(genderSelect.value === "Gênero") {
        alert("Escolha um gênero!");
        return;
    }

    // VERIFICA SE A RELIGIÃO FOI SELECIONADA
    if(religionInput.value === "") {
        alert("Selecione a religião do visitante!");
        return;
    }

    // VERIFICA SE A PERGUNTA SOBRE PEQUENO GRUPO FOI RESPONDIDA
    if(smallGroupInput.value === "") {
        alert("Preencha se o visitante frequenta pequeno grupo!");
        return;
    }

    // VERIFICA SE A PERGUNTA SOBRE ESTUDO BÍBLICO FOI RESPONDIDO
    if(bibleStudyInput.value === "") {
        alert("Preencha se o visitante pratica estudos bíblicos!");
        return;
    }

    // SE TODOS OS CAMPOS ESTIVEREM CORRETOS, ENVIE O FORM
    form.submit();
})