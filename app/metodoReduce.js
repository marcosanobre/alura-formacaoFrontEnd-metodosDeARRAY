function calcularValorTotalDeLivrosDisponiveis(livrosDisponiveis) {
    return livrosDisponiveis.reduce( (acumulardor,livro) => acumulardor + livro.preco, 0 ).toFixed(2);
};


