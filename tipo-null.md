# Tipos de Dados
## Tipos Primitivos
### Null
O Tipo Primitivo Null é utilizado para representar a ausência intencional de um valor ou a falta de um valor significativo, ou seja, quando uma variável precisa ser explicitamente definida como vazia ou sem valor, podemos atribuir "null" a ela.

```js
// Criando uma variável para armazenar informações sobre uma pessoa
var pessoa = {
    nome: "João",
    idade: 30,
    cargo: null // O cargo ainda não está definido
};

// Verificando se o cargo da pessoa está definido
if (pessoa.cargo === null) {
    console.log("O cargo da pessoa ainda não está definido.");
} else {
    console.log("O cargo da pessoa é:", pessoa.cargo);
}
```

- Exercío:
```javascript
// Função para verificar se um número é par ou ímpar
function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return numero; // Retorna o próprio número se for par
    } else {
        return null; // Retorna null se for ímpar
    }
}

// Testando a função
console.log(verificarParImpar(4)); // Saída: 4 (Número par)
console.log(verificarParImpar(7)); // Saída: null (Número ímpar)
```