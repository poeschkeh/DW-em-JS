# Operadores Básicos
Operadores Básicos são usados para realizar operações em variáveis e valores. 

Operadores Básicos incluem:
- Operadores Aritméticos
- Operadores de Atribuição
- Operadores de Comparação
- Operadores Lógicos
- Operadores de Concatenação de Strings

```js
// Operadores aritméticos
var soma = 5 + 3; // Adição
var subtracao = 10 - 4; // Subtração
var multiplicacao = 6 * 2; // Multiplicação
var divisao = 8 / 2; // Divisão
var modulo = 10 % 3; // Resto da divisão

console.log("Operadores aritméticos:");
console.log("Soma:", soma); // Saída: 8
console.log("Subtração:", subtracao); // Saída: 6
console.log("Multiplicação:", multiplicacao); // Saída: 12
console.log("Divisão:", divisao); // Saída: 4
console.log("Resto da divisão:", modulo); // Saída: 1

// Operadores de atribuição
var x = 5;
x += 3; // x = x + 3
console.log("Operadores de atribuição:");
console.log("x:", x); // Saída: 8

// Operadores de comparação
var a = 5;
var b = 3;
console.log("Operadores de comparação:");
console.log("a > b:", a > b); // Saída: true
console.log("a < b:", a < b); // Saída: false
console.log("a === b:", a === b); // Saída: false
console.log("a !== b:", a !== b); // Saída: true

// Operadores lógicos
var c = 10;
var d = 15;
console.log("Operadores lógicos:");
console.log("c > 5 && d < 20:", c > 5 && d < 20); // Saída: true
console.log("c > 5 || d < 10:", c > 5 || d < 10); // Saída: true
console.log("!(c > 5):", !(c > 5)); // Saída: false

// Operadores de concatenação de strings
var nome = "João";
var sobrenome = "Silva";
var nomeCompleto = nome + " " + sobrenome;
console.log("Operadores de concatenação de strings:");
console.log("Nome completo:", nomeCompleto); // Saída: João Silva
```

- Exercício:
```js
// Definindo os preços dos produtos
var precoProduto1 = 25.99;
var precoProduto2 = 15.49;
var precoProduto3 = 10.99;

// Definindo a quantidade de cada produto comprado
var quantidadeProduto1 = 2;
var quantidadeProduto2 = 3;
var quantidadeProduto3 = 1;

// Calculando o preço total da compra
var precoTotal = (precoProduto1 * quantidadeProduto1) + (precoProduto2 * quantidadeProduto2) + (precoProduto3 * quantidadeProduto3);

// Exibindo o preço total da compra
console.log("Preço total da compra:", precoTotal.toFixed(2)); // Utilizamos toFixed(2) para exibir apenas 2 casas decimais
```