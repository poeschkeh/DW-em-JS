# Operadores Básicos
## Operadores de Comparação
Os Operadores de Comparação são utilizados para comparar valores e retornar um valor booleano (true ou false) com base no resultado da comparação.

Os principais operadores de comparação são:
- Igualdade(==)
- Igualdade Estrita(===)
- Diferença(!=)
- Diferença estrita(!==)
- Maior que(>)
- Maior ou igual que(>=)
- Menor que(>)
- Menor ou igual que(<=)

```js
var x = 5;
var y = 10;

console.log("x == y:", x == y); // Saída: false
console.log("x === y:", x === y); // Saída: false
console.log("x != y:", x != y); // Saída: true
console.log("x !== y:", x !== y); // Saída: true
console.log("x > y:", x > y); // Saída: false
console.log("x >= y:", x >= y); // Saída: false
console.log("x < y:", x < y); // Saída: true
console.log("x <= y:", x <= y); // Saída: true
```

- Exercício:
```js
// Idades das duas pessoas
var idadePessoa1 = 25;
var idadePessoa2 = 30;

// Comparando as idades
if (idadePessoa1 === idadePessoa2) {
    console.log("As duas pessoas têm a mesma idade.");
} else if (idadePessoa1 > idadePessoa2) {
    console.log("A pessoa 1 é mais velha do que a pessoa 2.");
} else {
    console.log("A pessoa 2 é mais velha do que a pessoa 1.");
}
```