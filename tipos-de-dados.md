# Tipos de Dados
Tipos de Dados são uma representação dos diferentes tipos de valores que podem ser modificados pelo código.

Em JavaScript, os tipos de dados podem ser dinamicamente inferidos, ou seja, não é preciso declarar explicitamente o tipo de uma variável antes de atribuir um valor a ela.

Tipode dados são separados em três tipos:
- Tipos Primitivos
- Tipos de Dados Compostos (Objetos)
- Outros Tipos

```javascript
// Tipos de dados primitivos
var numero = 10; // Number
var texto = "Olá, mundo!"; // String
var booleano = true; // Boolean
var indefinido = undefined; // Undefined
var nulo = null; // Null
var simbolo = Symbol("simbolo"); // Symbol
var bigint = 1234567890123456789012345678901234567890n; // BigInt

// Tipos de dados compostos (objetos)
var objeto = { nome: "João", idade: 30 }; // Object
var array = [1, 2, 3, 4]; // Array
var funcao = function() { console.log("Esta é uma função!"); }; // Function
var data = new Date(); // Date
var expressaoRegular = /hello/g; // RegExp

// Imprimindo os valores das variáveis
console.log("Número:", numero);
console.log("Texto:", texto);
console.log("Booleano:", booleano);
console.log("Indefinido:", indefinido);
console.log("Nulo:", nulo);
console.log("Símbolo:", simbolo);
console.log("BigInt:", bigint);

console.log("Objeto:", objeto);
console.log("Array:", array);
console.log("Função:", funcao);
console.log("Data:", data);
console.log("Expressão Regular:", expressaoRegular);
```

- Exercício para fixação com Tipos de Dados:
```javascript
// Declarando e inicializando variáveis com diferentes tipos de dados
var nome = "Maria"; // String
var idade = 25; // Number
var altura = 1.65; // Number
var solteira = true; // Boolean

// Declarando e inicializando um array com múltiplos tipos de dados
var interesses = ["música", "esportes", 10, true];

// Declarando e inicializando um objeto com múltiplos tipos de dados
var pessoa = {
  nome: "João",
  idade: 30,
  altura: 1.75,
  solteira: false,
  hobbies: ["leitura", "viagem"],
  endereco: {
    rua: "Rua das Flores",
    numero: 123,
    cidade: "São Paulo"
  }
};

// Imprimindo informações sobre a pessoa
console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);
console.log("Altura:", pessoa.altura);
console.log("Solteira?", pessoa.solteira);
console.log("Hobbies:", pessoa.hobbies);
console.log("Endereço:", pessoa.endereco.rua + ", " + pessoa.endereco.numero + ", " + pessoa.endereco.cidade);

// Atribuindo um novo valor à idade da pessoa
pessoa.idade = 31;

// Imprimindo a nova idade da pessoa
console.log("Nova idade:", pessoa.idade);
```