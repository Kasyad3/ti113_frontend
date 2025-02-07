let pessoas = [];

// Função para cadastrar a pessoa
function cadastrarPessoa() {
    let pessoa = {};
    pessoa.nome = document.querySelector("#txtNome").value;
    pessoa.sobrenome = document.querySelector("#txtSobreNome").value;
    pessoa.cpf = document.querySelector("#txtCPF").value;
    pessoa.dataNascimento = document.querySelector("#txtDataNascimento").value;

    // Após guardar os dados, os campos são apagados
    document.querySelector("#txtNome").value = "";
    document.querySelector("#txtSobreNome").value = "";
    document.querySelector("#txtCPF").value = "";
    document.querySelector("#txtDataNascimento").value = "";

    pessoas.push(pessoa);
    gravarStorage();
    exibirPessoas();  // Exibe a pessoa cadastrada imediatamente após adicionar
}

// Função para gravar os dados no localStorage
function gravarStorage() {
    let listaPessoas = JSON.stringify(pessoas);
    localStorage.setItem("listaPessoas", listaPessoas);
}

// Função para exibir as pessoas na tabela
function exibirPessoas() {
    let tabela = document.querySelector("#tabPessoas");

    // Limpa a tabela (exceto o cabeçalho)
    tabela.innerHTML = `
        <tr>
            <th>Nome</th>
            <th>SobreNome</th>
            <th>CPF</th>
            <th>Data De Nascimento</th>
        </tr>
    `;

    // Exibe cada pessoa na tabela
    pessoas.forEach(pessoa => {
        let row = tabela.insertRow();
        row.insertCell(0).textContent = pessoa.nome;
        row.insertCell(1).textContent = pessoa.sobrenome;
        row.insertCell(2).textContent = pessoa.cpf;
        row.insertCell(3).textContent = pessoa.dataNascimento;
    });
}

// Recupera os dados do localStorage ao carregar a página
function carregarPessoas() {
    let listaPessoas = localStorage.getItem("listaPessoas");
    if (listaPessoas) {
        pessoas = JSON.parse(listaPessoas);
        exibirPessoas();
    }
}

// Inicializa a exibição das pessoas armazenadas
carregarPessoas();

let btnCadastrar = document.querySelector("#btnCadastrar");
btnCadastrar.addEventListener("click", cadastrarPessoa);

// Função para apagar todos os dados
function apagarDados() {
    // Limpa o array de pessoas
    pessoas = [];

    // Apaga os dados do localStorage
    localStorage.removeItem("listaPessoas");

    // Atualiza a tabela (deve ficar vazia)
    exibirPessoas();
}

let btnApagar = document.querySelector("#btnApagar");
btnApagar.addEventListener("click", apagarDados); // Correção aqui: evento de clique no botão "Apagar"