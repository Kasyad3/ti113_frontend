let botao = document.querySelector('#btnMostrar')
botao.addEventListener("click", mostrarValores);

function mostrarValores(){
    
    let pessoa = {};
    pessoa.nome = document.querySelector('#txtNome').value;
    pessoa.altura = parseFloat(document.querySelector('#txtAltura').value);
    pessoa.idade = parseInt( document.querySelector('#txtIdade').value);
    pessoa.dataNascimento =   document.querySelector('#txtDataNascimento').value;

    let mensagem = `<br>
    O Nome digitado é <strong> ${pessoa.nome} </strong> <br>
    A Altura informada é <strong>${pessoa.altura.toFixed(2)}</strong><br>
    A Idade informada é <strong>${pessoa.idade}</strong><br>
    A Data de nascimento informada é <strong>${pessoa.dataNascimento}</strong>`
    
    let div = document.querySelector("#resultado");
    div.innerHTML = mensagem

};

// let pessoa = {};
// pessoa.nome = prompt("Informe Nome");
// pessoa.altura = parseFloat(prompt("Informe Altura: "));
// pessoa.idade = parseInt(prompt("Informe Idade: "));
// pessoa.dataNascimento = prompt("Informe Data Nascimento (dd/mm/yyyy)");

// console.log(pessoa);