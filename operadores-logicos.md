# Operadores Básicos
## Operadores Lógicos
Operadores Lógicos são utilizados para combinar expressões condicionais e retornar um valor booleano (true ou false). 

Os operadores lógicos são frequentemente utilizados em conjunto com instruções condicionais (como if, else, else if). 

Existem três principais operadores lógicos:
- AND lógicos(&&)
- OR lógico(||)
- NOT lógico(!)

```js
var x = 5;
var y = 10;
var z = 15;

// AND lógico (&&)
console.log("x < y && y < z:", x < y && y < z); // Saída: true (5 < 10 e 10 < 15)

// OR lógico (||)
console.log("x > y || y < z:", x > y || y < z); // Saída: true (5 não é maior que 10, mas 10 é menor que 15)

// NOT lógico (!)
console.log("!(x === y):", !(x === y)); // Saída: true (5 não é igual a 10)
```

- Exercício:
```javascript
// Número a ser verificado
var numero = 25;

// Definindo os limites do intervalo
var limiteInferior = 10;
var limiteSuperior = 30;

// Verificando se o número está dentro do intervalo usando operadores lógicos
if (numero >= limiteInferior && numero <= limiteSuperior) {
    console.log("O número", numero, "está dentro do intervalo entre", limiteInferior, "e", limiteSuperior);
} else {
    console.log("O número", numero, "está fora do intervalo entre", limiteInferior, "e", limiteSuperior);
}
```