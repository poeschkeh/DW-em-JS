# Operadores Básicos
## Operadores Typeof
O Operador Typeof é usado para determinar o tipo de dado de uma expressão ou variável. Ele retorna uma string indicando o tipo do valor fornecido.

Existem sete possíveis resultados que o operador typeof pode retornar:
- Number
- String
- Boolean
- Object
- Undefined
- Symbol
- Function

```javascript
var x = 10;
var y = "Olá, mundo!";
var z = true;
var w;
var obj = { nome: "João", idade: 25 };
var func = function() {};

console.log(typeof x); // "number"
console.log(typeof y); // "string"
console.log(typeof z); // "boolean"
console.log(typeof w); // "undefined"
console.log(typeof obj); // "object"
console.log(typeof func); // "function"
```

- Exercício para fixação:
```js
// Solicita uma entrada do usuário
var entrada = prompt("Digite algo:");

// Verifica o tipo de dado da entrada do usuário usando o operador typeof
var tipo = typeof entrada;

// Exibe o tipo de dado da entrada do usuário
console.log("O tipo de dado da entrada é:", tipo);
```