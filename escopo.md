## Escopo
Escopó em JavaScript é referente a como a variável pode ser usada ou declarada.

Para ser usada ou declarada, o escopo de uma variável depende do local onde ela foi declarad e da palavra-chave que foi utilizada (var, let, const).

Existem três tipos de escopo, e eles são:
- Escopo Global
- Escopo de Bloco
- Escopo de função

```javascript
// Escopo global
var globalVariable = "Eu sou uma variável global";

function globalScopeFunction() {
    console.log("Variável global dentro da função:", globalVariable);
}

console.log("Variável global fora da função:", globalVariable);

// Escopo de bloco
function blockScopeExample() {
    if (true) {
        var blockVariable = "Eu sou uma variável de bloco";
        let blockLetVariable = "Eu sou uma variável de bloco com let"; // Escopo de bloco restrito
        const blockConstVariable = "Eu sou uma constante de bloco"; // Escopo de bloco restrito
        console.log("Variável de bloco:", blockVariable);
        console.log("Variável de bloco com let:", blockLetVariable);
        console.log("Constante de bloco:", blockConstVariable);
    }
    // console.log("Variável de bloco fora do bloco:", blockVariable); // Isso geraria um erro, pois blockVariable não está definido aqui
    // console.log("Variável de bloco com let fora do bloco:", blockLetVariable); // Isso geraria um erro, pois blockLetVariable não está definido aqui
    // console.log("Constante de bloco fora do bloco:", blockConstVariable); // Isso geraria um erro, pois blockConstVariable não está definido aqui
}

blockScopeExample();

// Escopo de função
function functionScopeExample() {
    var functionVariable = "Eu sou uma variável de função";
    console.log("Variável de função:", functionVariable);
}

// console.log("Variável de função fora da função:", functionVariable); // Isso geraria um erro, pois functionVariable não está definido aqui
functionScopeExample();
```
- Exemplo de exercício de fixação
```javascript
// Escopo global
const precoLivro = 20; // Preço base de um livro
let totalCompra = 0; // Inicializa o total da compra

// Função para calcular o preço total de uma compra de livros
function calcularPrecoTotal(quantidade, categoria) {
    // Escopo de função
    let precoFinal = quantidade * precoLivro; // Calcula o preço inicial sem desconto

    // Escopo de bloco
    switch (categoria) {
        case 'Ficção':
            precoFinal *= 0.9; // Aplica um desconto de 10% para livros de ficção
            break;
        case 'Não-ficção':
            precoFinal *= 0.85; // Aplica um desconto de 15% para livros de não-ficção
            break;
        default:
            // Nenhuma ação especial para outras categorias
            break;
    }

    // Adiciona o preço final ao total da compra
    totalCompra += precoFinal;

    // Retorna o preço final
    return precoFinal;
}

// Chamada da função para calcular o preço total de uma compra de livros
console.log("Preço final (Ficção, 3 unidades): $" + calcularPrecoTotal(3, 'Ficção'));
console.log("Preço final (Não-ficção, 2 unidades): $" + calcularPrecoTotal(2, 'Não-ficção'));

// Imprime o total da compra
console.log("Total da compra: $" + totalCompra);
```

#### Algumas explicações do código acima
No código fornecido, o 'switch', 'case' e 'break' são construções da linguagem JavaScript que estão sendo usadas para implementar uma lógica de desconto com base na categoria dos livros. 

- 'switch': O switch é uma estrutura de controle de fluxo que permite avaliar uma expressão e, com base no valor dessa expressão, executar diferentes blocos de código. Em outras palavras, o switch é usado para escolher entre várias opções de execução, dependendo do valor da expressão fornecida.

- 'case': O case é usado dentro de um bloco switch para definir uma condição específica. Cada case é seguido por um valor possível que a expressão do switch pode ter. Quando a expressão do switch coincide com o valor de um case, o código dentro desse case é executado.

- 'break': O break é usado dentro de um bloco case para terminar a execução do bloco switch. Sem o break, o fluxo de execução continuaria no próximo case, mesmo que a condição não fosse satisfeita. O break é essencial para evitar esse comportamento e garantir que apenas o bloco case correspondente seja executado.