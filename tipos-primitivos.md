# Tipos de Dados
## Tipos Primitivos
Os Tipos Primitivos são tipos de dados básicos que representam valores simples e imutáveis, ou seja, ao atribuir um novo valor a uma variável que contém um tipo primitivo, o valor original é substituído e não é modificado diretamente. 

Eles são diretamente suportados pela linguagem e não são objetos.

Existem sete tipos primitivos, e são eles:
- Number
- Boolean
- String
- Underfined
- Null
- Symbol
- Biglnt

```javascript
// Declarando variáveis com tipos primitivos
var nome = "Maria"; // String
var idade = 25; // Number
var altura = 1.65; // Number
var solteira = true; // Boolean

// Imprimindo os valores das variáveis
console.log("Nome:", nome); // Saída: Nome: Maria
console.log("Idade:", idade); // Saída: Idade: 25
console.log("Altura:", altura); // Saída: Altura: 1.65
console.log("Solteira?", solteira); // Saída: Solteira? true

// Verificando os tipos de dados das variáveis
console.log("Tipo de dado de 'nome':", typeof nome); // Saída: Tipo de dado de 'nome': string
console.log("Tipo de dado de 'idade':", typeof idade); // Saída: Tipo de dado de 'idade': number
console.log("Tipo de dado de 'altura':", typeof altura); // Saída: Tipo de dado de 'altura': number
console.log("Tipo de dado de 'solteira':", typeof solteira); // Saída: Tipo de dado de 'solteira': boolean
```

- Exercício de fixação para tipos primitivos:
```js
// Declaração das variáveis com tipos primitivos
var nome = "João"; // String
var peso = 70; // Number (em quilogramas)
var altura = 1.75; // Number (em metros)

// Cálculo do IMC (Índice de Massa Corporal)
var imc = peso / (altura * altura);

// Imprimindo o resultado do cálculo do IMC
console.log("Nome:", nome);
console.log("Peso:", peso + " kg");
console.log("Altura:", altura + " m");
console.log("IMC:", imc.toFixed(2)); // Arredonda o resultado para duas casas decimais
```