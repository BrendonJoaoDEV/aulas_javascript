// DADOS DE EXEMPLO

// Array de números para exemplos básicos
const numeros = [1, 2, 3, 4, 5];

// Array de objetos (pessoas) para exemplos mais complexos
const pessoas = [
    { nome: 'Gal Gadot', idade: 40, cidade: 'Rosh HaAyin'},
    { nome: 'Elizabeth Olsen', idade: 36, cidade: 'Serman Oaks'},
    { nome: 'Alexandra Daddario', idade: 39, cidade: 'Nova York'},
    { nome: 'Anna de Armas', idade: 37, cidade: 'Havana'},
    { nome: 'Grace Kelly', idade: 95, cidade: 'Filadélfia'},
    { nome: 'Jaz Sinclair', idade: 17, cidade: 'Dallas'}
];

// MÉTODOS DE ITERAÇÃO

// MÉTODO: forEach() (paraCada)
// DESCRIÇÃO: Executa uma funçãopara cada elemento do array
// NÃO RETORNA um novo array
document.getElementById('botao-paraCada').addEventListener('click', function () {
    // Variável para acumular os resultados
    let resultado = '';

    // Usando forEach para iterar sobre cada número
    numeros.forEach(function(numero, indice) {
        resultado += `\tPosição ${indice}: ${numero}\n`;
    });

    // Exibindo o resultado na página
    document.getElementById('resultado-paraCada').innerHTML = `
    <strong>Array original:</strong> ${JSON.stringify(numeros)}<br><br>
    <strong>Iteração com forEach:</strong><br> 
    ${resultado}
    <small>Observação: forEach não retorna um novo array</small>`;
});

// MÉTODO: map() (mapear)
// DESCRIÇÃO: Cria um novo array com os resultados de uma função aplicada a cada elemento
document.getElementById('botao-mapear').addEventListener('click', function () {
    // Usando map para criar um novo array com os quadrados dos números
    const quadrados = numeros.map(function(numero) {
        return numero * numero;
    });

    // Exibindo o resultado
    document.getElementById('resultado-mapear').innerHTML = `
    <strong>Array original:</strong> ${JSON.stringify(numeros)}<br><br>
    <strong>Array com quadrados (map):</strong> ${JSON.stringify(quadrados)}<br><br>
    <small>Observação: map sempre retorna um novo array do mesmo tamanho</small>`;
});

// MÉTODO: filter() (filtrar)
// DESCRIÇÃO: Cria um novo array com elementos que passam em um teste (função)
document.getElementById('botao-filtrar').addEventListener('click', function () {
    // Filtrando apenas pessoas com idade >= 18
    const maioresDeIdade = pessoas.filter(function(pessoa) {
        return pessoa.idade >= 18;
    });

    // Exibindo o resultado
    document.getElementById('resultado-filtrar').innerHTML = `
    <strong>Array original:</strong> ${JSON.stringify(pessoas, null, 2)}<br><br>
    <strong>Maiores de idade (filter):</strong> ${JSON.stringify(maioresDeIdade, null, 2)}<br><br>
    <small>Observação: filter retorna um novo array apenas com os elementos que passsam no teste</small>`;
});

// MÉTODO: reduce() (reduzir)
// DESCRIÇÃO: Reduz o array a um único valor usando uma função acumuladora
document.getElementById('botao-reduzir').addEventListener('click', function() {
    // Somando todos os números do array
    const somaTotal = numeros.reduce(function(acumulador, numeroAtual) {
        return acumulador + numeroAtual;
    }, 0); // 0 é o valor inicial do acumulador

    // Exibindo o resultado
    document.getElementById('resultado-reduzir').innerHTML = `
    <strong>Array original:</strong> ${JSON.stringify(numeros)}<br><br>
    <strong>Soma total (reduce):</strong> ${somaTotal}<br><br>
    <small>Observação: reduce pode transformar um array em qualquer tipo de valor</small>`;
});

// MÉTODO: find() (encontrar)
// DESCRIÇÃO: Retorna o primeiro elemento que satisfaz uma condição
document.getElementById('botao-encontrar').addEventListener('click', function() {
    // Encontrando a primeira pessoa menor de idade
    const menorDeIdade = pessoas.find(function(pessoa) {
        return pessoa.idade < 18;
    });

    // Exibindo o resultado
    document.getElementById('resultado-encontrar').innerHTML = `
    <strong>Array original:</strong> ${JSON.stringify(pessoas, null, 2)}<br><br>
    <strong>Primeiro menor de idade (find):</strong> ${JSON.stringify(menorDeIdade)}<br><br>
    <small>Observação: find retorna apenas o primeiro elemento encontrado</small>`;
});

// MÉTODOS: some() (algum) e every() (todos)
// DESCRIÇÃO:
//    - some(): Verifica se pelo menos um elemento satisfaz a condição
//    - every(): Verifica se todos os elementos satisfazem a condição
document.getElementById('botao-algum').addEventListener('click', function() {
    // Verifica se há pelo menos um menor de idade
    const existeMenor = pessoas.some(function(pessoa) {
        return pessoa.idade < 18;
    });

    document.getElementById('resultado-algum').innerHTML = `
    <strong>Array original:</strong> ${JSON.stringify(pessoas, null, 2)}<br><br>
    <strong>Existe algum menor de idade? (some):</strong> ${existeMenor ? 'Sim' : 'Não'}<br><br>
    <small>Observação: some retorna true se pelo menos um elemento passar no teste</small>`;
});

document.getElementById('botao-todos').addEventListener('click', function() {
    // Verifica se todos são maiores de idade
    const todosMaiores = pessoas.every(function(pessoa) {
        return pessoa.idade >= 18;
    });

    document.getElementById('resultado-todos').innerHTML = `
    <strong>Array original:</strong> ${JSON.stringify(pessoas, null, 2)}<br><br>
    <strong>Todos são maiores de idade? (every):</strong> ${todosMaiores ? 'Sim' : 'Não'}<br><br>
    <small>Observação: every retorna true apenas se TODOS os elementos passarem no teste</small>`
})