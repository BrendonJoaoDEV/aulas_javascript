// Arquivo de demonstração dos principais métodos de arrays em JavaScript
// Cada seção explica um método diferente com exemplos práticos

// Array base que será usado nos exemplos
let arrayExemplo = ['Maçã', 'Banana', 'Laranja'];

// Método push()
// Adiciona um ou mais elementos ao final do array e retorna o novo comprimento
document.getElementById('botao-push').addEventListener('click', function () {
    // Cópia do array original para não modificá-lo diretamente
    // Spread Operator(...) para criar uma cópia do array
    let array = [...arrayExemplo];

    // Armazena o resultado do push (novo tamanho do array)
    let novoComprimento = array.push('Manga', 'Abacaxi');

    // Exibe os resultados
    document.getElementById('resultado-push').innerHTML = `
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Elementos adicionados:</strong> "Manga", "Abacaxi"<br>
    <strong>Novo comprimento do array:</strong> ${novoComprimento}<br>
    <strong>Array modificado:</strong> [${array.join(', ')}]`;
});

// Método pop()
// Remove o último elemento do array e retorna esse elemento
document.getElementById('botao-pop').addEventListener('click', function () {
    let array = [...arrayExemplo];
    // Remove e armazena o último elemento
    let elementoRemovido = array.pop();

    document.getElementById('resultado-pop').innerHTML = `
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Elemento removido:</strong> "${elementoRemovido}"<br>
    <strong>Array modificado:</strong> [${array.join(', ')}]`;
});

// Método unshift()
// Adiciona um ou mais elementos no início do array e retorna o novo comprimento
document.getElementById('botao-unshift').addEventListener('click', function () {
    let array = [...arrayExemplo];
    // Adiciona elementos no início e armazena o novo tamanho
    let novoComprimento = array.unshift('Manga', 'Abacaxi');

    document.getElementById('resultado-unshift').innerHTML = `
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Elementos adicionados:</strong> "Manga", "Abacaxi"<br>
    <strong>Novo comprimento do array:</strong> ${novoComprimento}<br>
    <strong>Array modificado:</strong> [${array.join(', ')}]`;
});

// Método shift()
// Remove o primeiro elemento do array e retorn esse elemento
document.getElementById('botao-shift').addEventListener('click', function () {
    let array = [...arrayExemplo];
    // Remove e armazena o primeiro elemento
    let elementoRemovido = array.shift();

    document.getElementById('resultado-shift').innerHTML = `
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Elemento removido:</strong> "${elementoRemovido}"<br>
    <strong>Array modificado:</strong> [${array.join(', ')}]`;
});

// Método splice()
// Altera o conteúdo de um array removendo, substituindo ou adicionando elementos
// Parâmetros: índice inicial, quantidade a remove, elementos a adicionar
document.getElementById('botao-splice').addEventListener('click', function () {
    let array = [...arrayExemplo];
    // Remove 1 elemento a partir do índice 1 e adiciona 'Kiwi' e 'Morango'
    let elementosRemovidos = array.splice(1, 1, 'Kiwi', 'Morango');

    document.getElementById('resultado-splice').innerHTML = `
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Operação:</strong> array.splice(1, 1, 'Kiwi', 'Morango')<br>
    <strong>Elementos removidos:</strong> [${elementosRemovidos.join(', ')}]<br>
    <strong>Array modificado:</strong> [${array.join(', ')}]`;
});

// Método slice()
// Retorna uma cópia de parte de um array em um novo array
// Parâmetros: índice inicial (inclusivo), índice final(exclusivo)
document.getElementById('botao-slice').addEventListener('click', function () {
    // Não precisa de cópia pois slice já retorna um novo array
    let novoArray = arrayExemplo.slice(1, 3);

    document.getElementById('resultado-slice').innerHTML = `
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Operação:</strong> array.slice(1, 3)<br>
    <strong>Novo array retornado:</strong> [${novoArray.join(', ')}]<br>
    <strong>Array original permanece inalterado:</strong> [${arrayExemplo.join(', ')}]`;
});