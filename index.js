// FUNÇÃO PARA ARMAZENAR NOMES EM ARRAY
//***************************************************quinta musica
var dadosLista = [];
function salvarNota() {
    let nota = document.getElementById("nota").value;
    if (nota) {
        dadosLista.push(nota);
        criarNota();
        document.getElementById('nota').value = '';

    }
}
// FUNÇÃO PARA CRIAR LISTA DE NOTAS
function criarNota() {
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Notas:</th></tr>";

    for (let i = 0; i <= (dadosLista.length - 1); i++) {
        tabela += "<tr><td>" + dadosLista[i] + "<td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Alterar</button><button class='btn btn-success' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}
// FUNCAO PARA EDITAR NOTA
function editar(i) {
    document.getElementById('nota').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
    document.getElementById('tabela').deleteRow(i);
    // console.log(dadosLista);
}
function excluir(i) {
    dadosLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);

}

