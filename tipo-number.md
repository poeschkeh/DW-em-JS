# Tipos de Dados
## Tipos Primitivos
### Number
O Tipo Primitivo Number é utilizado para representar valores numéricos, tanto inteiros quanto de ponto flutuante (decimais). Ele lida com valores numéricos em diversas situações, desde cálculos matemáticos simples até operações mais complexas em aplicações web e de software.

```js
// Declarando variáveis do tipo number
var idade = 25; // Representa a idade de uma pessoa
var altura = 1.75; // Representa a altura de uma pessoa em metros
var preco = 29.99; // Representa o preço de um produto em dólares

// Realizando operações matemáticas com números
var soma = 10 + 5; // Calcula a soma de dois números
var multiplicacao = idade * 2; // Calcula o dobro da idade

// Exibindo resultados no console
console.log("Idade:", idade);
console.log("Altura:", altura);
console.log("Preço:", preco);

console.log("Soma:", soma); // Saída: Soma: 15
console.log("Dobro da Idade:", multiplicacao); // Saída: Dobro da Idade: 50
```

- Exercício de fixação:
```js
// Notas do aluno
var nota1 = 8; // Primeira nota
var nota2 = 7; // Segunda nota
var nota3 = 6; // Terceira nota

// Calculando a média das notas
var media = (nota1 + nota2 + nota3) / 3;

// Exibindo a média no console
console.log("Nota 1:", nota1);
console.log("Nota 2:", nota2);
console.log("Nota 3:", nota3);
console.log("Média:", media.toFixed(2)); // Exibe a média com duas casas decimais
```