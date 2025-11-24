
//Busca o formulário inteiro pelo seu ID "form" e armazena na constante buscaForm.
const buscaForm = document.getElementById("form");

buscaForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const inputs = buscaForm.querySelectorAll('.campo');

    inputs.forEach(input => {
        validateInput(input);
    });


});

// validação dos inputs do formulário e adiciona a classe vazio ou valido e mostra ou esconde a mensagem de erro.

function validateInput(input) {

    const mensagemErro = input.parentElement.querySelector('.mensagem-erro');


    if (input.value === "") {

        input.classList.add('vazio');
        input.classList.remove('valido');

        mensagemErro.classList.add('mostrar-erro');

    } else {
        input.classList.add('valido');
        input.classList.remove('vazio');

        mensagemErro.classList.remove('mostrar-erro');
    }
}


