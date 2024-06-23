let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

async function getBuscarLivrosDaAPI () {
    const res = await fetch( endpointDaAPI );
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto( livros );
    exibirOsLivrosNaTela( livrosComDesconto );
};

getBuscarLivrosDaAPI();

