// FUNÇÔES DE CÁLCULO (Arrow Functions)
const dobrar = numero => numero * 2;
const triplicar = numero => numero * 3;

// FUNÇÔES DE EXIBIÇÃO DE RESULTADOS
function mostrarResultado(operacao, texto) {
    // Obtém referência aos elementos do DOM
    const input = document.getElementById('numero'); // Campo de entrada
    const resultado = document.getElementById('resultado'); // Elemento para exibir resultados

    // Converte o valor de string para número decimal
    const numero = parseFloat(input.value);

    // Validação de entrada - verifica se não é um número
    if (isNaN(numero)) {
        resultado.textContent = 'Por favor, digite um número válido.';
        resultado.style.color = 'red'; // Feedback visula de erro
        return;
    }

    // Executa a operação matemática (dobrar ou triplicar)
    const valor = operacao(numero);

    // Formata e exibe o resultado
    resultado.textContent = `${texto} de ${numero} é: ${valor}`;
    resultado.style.color = 'black'; // Cor padrão para resultados válidos
}

// EVENT LISTENERS - INTERAÇÕES DO USUÁRIO

// Botão "dobro" - Calcula e exibe o dobro do número
document.getElementById('dobro').addEventListener('click', function() {
    mostrarResultado(dobrar, 'O dobro');
});

// Botão "Triplo" - Calcula e exibe o triplo do número
document.getElementById('triplo').addEventListener('click', function() {
    mostrarResultado(triplicar, 'O triplo');
});

// Campo numérico - Permite calcular com a tecla Enter
document.getElementById('numero').addEventListener('keypress', function(enter) {
    // Verifica se a tecla pressionada foi Enter (código 13)
    if (enter.key === 'Enter') {
        // Por padrão, calcula o dobro quando Enter é pressionado
        mostrarResultado(dobrar, 'O dobro');
    }
});