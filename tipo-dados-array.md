# Tipos de Dados
## Array
Array é um Tipo de Dados que permite armazenar uma coleção ordenada de valores, que podem ser de qualquer tipo de dado, incluindo números, strings, objetos, funções e até mesmo outros arrays. Eles são objetos especiais com propriedades e métodos específicos para manipular seus elementos.

```js
// Criando um array de números
var numeros = [1, 2, 3, 4, 5];

// Acessando e exibindo elementos do array
console.log("Primeiro elemento:", numeros[0]); // Saída: 1
console.log("Segundo elemento:", numeros[1]); // Saída: 2
console.log("Último elemento:", numeros[numeros.length - 1]); // Saída: 5

// Modificando elementos do array
numeros[0] = 10;
console.log("Novo primeiro elemento:", numeros[0]); // Saída: 10

// Adicionando um novo elemento ao final do array
numeros.push(6);
console.log("Array após adição:", numeros); // Saída: [10, 2, 3, 4, 5, 6]

// Removendo o último elemento do array
numeros.pop();
console.log("Array após remoção:", numeros); // Saída: [10, 2, 3, 4, 5]
```

- Exercício para fixação de tipo de dados array:
```javascript
// Função para calcular a soma dos elementos de um array de números
function calcularSoma(numeros) {
    var soma = 0;
    for (var i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

// Testando a função com um array de números
var numeros = [1, 2, 3, 4, 5];
console.log("Soma dos números:", calcularSoma(numeros)); // Saída: 15
```