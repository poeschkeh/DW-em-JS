# Tipos de Dados
## Tipos Primitivos
### Boolean
O tipo boolean é utilizado para representar um valor lógico que pode ser verdadeiro (true) ou falso (false). Esse tipo de dado é frequentemente utilizado em situações onde é preciso fazer uma verificação de condição.

- Exemplo:
```javascript
// Declarando uma variável booleana
var sol = true; // Representa que está ensolarado
var chove = false; // Representa que não está chovendo

// Verificando o valor das variáveis e exibindo mensagens correspondentes
if (sol) {
    console.log("Está ensolarado!"); // Esta mensagem será exibida se sol for verdadeiro
} else {
    console.log("Não está ensolarado.");
}

if (chove) {
    console.log("Está chovendo.");
} else {
    console.log("Não está chovendo!"); // Esta mensagem será exibida se chove for falso
}
```

- Exercício para fixação de tipo primitivo boolean:
```js
// Altura mínima para entrar na montanha-russa (em metros)
var alturaMinima = 1.4;

// Altura da pessoa (em metros)
var alturaPessoa = 1.45;

// Verifica se a pessoa pode entrar na montanha-russa
if (alturaPessoa >= alturaMinima) {
    console.log("Você pode entrar na montanha-russa!"); // Saída se a altura da pessoa for maior ou igual à altura mínima
} else {
    console.log("Desculpe, você não tem altura suficiente para entrar na montanha-russa."); // Saída se a altura da pessoa for menor que a altura mínima
}
```