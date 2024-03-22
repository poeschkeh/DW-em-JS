## Escopo
### Escopo Global
Escopo Global se refere ao contexto no qual as variáveis e funções são acessíveis de qualquer lugar do código. Ao declarar uma variável fora de qualquer função, ela se torna uma variável global e pode ser acessada de dentro de qualquer função ou bloco de código.

Usar extensivamente variáveis globais não é recomendado, pois pode levar a problemas e dificuldades quando utilizado em grandes projetos. É uma prática melhor limitar o escopo de suas variáveis o máximo possível, usando funções e blocos para encapsular e proteger o acesso a elas.
Ao utilizar ECMAScript 6 (também conhecido como ES6 ou ES2015), é possível usar as palavras-chave "let" e "const" para declarar variáveis com escopo de bloco, o que ajuda a evitar a excessiva utilização do escopo global.

- Exemplos:
```javascript
// Variável global
var globalVar = "Eu sou uma variável global";

function minhaFuncao() {
    // A variável globalVar é acessível dentro desta função
    console.log(globalVar);
}

minhaFuncao(); // Saída: "Eu sou uma variável global"
```

```javascript
// Variável com escopo de bloco
let localVar = "Eu sou uma variável com escopo de bloco";

function minhaFuncao() {
    // A variável localVar não é acessível aqui
    // Acessar localVar aqui resultaria em um erro de referência
}

console.log(localVar); // Isso resultaria em um erro de referência
```

- Exemplo de exercício de fixação com Escopo Global:
```javascript
// Variável global
var globalVar = "Eu sou uma variável global";

function funcao1() {
    // Acessando a variável global dentro de uma função
    console.log("Dentro da função 1:", globalVar);
}

function funcao2() {
    // Modificando o valor da variável global dentro de outra função
    globalVar = "Valor modificado dentro da função 2";
}

// Chamando as funções
funcao1(); // Saída: "Dentro da função 1: Eu sou uma variável global"
console.log("Antes da função 2:", globalVar); // Saída: "Antes da função 2: Eu sou uma variável global"
funcao2(); // Modifica o valor da variável global
console.log("Depois da função 2:", globalVar); // Saída: "Depois da função 2: Valor modificado dentro da função 2"
funcao1(); // Saída: "Dentro da função 1: Valor modificado dentro da função 2"
```