let botao = document.querySelector("#MostrarIMC")
botao.addEventListener("click", MostrarIMC);

function MostrarIMC(){

    let pessoa = {
    nome: document.querySelector("txtNome").value,
    altur: parseFloat(document.querySelector("txtAltura").value),
    peso: parseFloat(document.querySelector("txtPeso").value)

    calculo: peso / (altura*altura)
    }


    let mensagem = `<br> 
    O IMC de ${pessoa.nome} é ${pessoa.calculo}.`

    let resultadoIMC = document.querySelector("#resultado");
    div.innerHTML = mensagem
};


