# Tipos de Dados
## Tipos Primitivos
### String
O Tipo Primitivo String é utilizado para representar sequências de caracteres. 

As Strings podem ser usadas para:

- Representação de texto
- Cadeias de caracteres
- Delimitadores de strings
- Concatenação de strings 
- E também podem ser usadas com Propriedades e Métodos de strings

```js
// Declarando variáveis do tipo string
var nome = "Maria"; // Representa o nome de uma pessoa
var mensagem = "Bem-vindo ao nosso site!"; // Representa uma mensagem de boas-vindas

// Exibindo as variáveis no console
console.log("Nome:", nome); // Saída: Nome: Maria
console.log("Mensagem:", mensagem); // Saída: Mensagem: Bem-vindo ao nosso site!

// Concatenando strings
var saudacao = "Olá, " + nome + "! " + mensagem;
console.log("Saudação:", saudacao); // Saída: Saudação: Olá, Maria! Bem-vindo ao nosso site!

// Acessando caracteres individuais da string
console.log("Primeira letra do nome:", nome[0]); // Saída: Primeira letra do nome: M
```

- Exercício para fixação:
```js
// Informações sobre a pessoa
var nome = "Ana"; // Nome da pessoa
var sobrenome = "Silva"; // Sobrenome da pessoa
var idade = 30; // Idade da pessoa

// Concatenando as informações para formar uma frase
var frase = "Olá, meu nome é " + nome + " " + sobrenome + " e eu tenho " + idade + " anos.";

// Exibindo a frase no console
console.log(frase); // Saída: Olá, meu nome é Ana Silva e eu tenho 30 anos.
```