# Variáveis
## Declaração de Variáveis
Para utilizarmos uma variável em JavaScript primeiro é preciso declará-la/ criá-la.

E para declará-la, utilizamos uma das três palavras-chave:
- var
- let
- const

``` javascript
  // Exemplo com var
var nome = "João";
console.log(nome); // Saída: João

if (true) {
    var idade = 30;
    console.log(idade); // Saída: 30
}

console.log(idade); // Saída: 30 (idade é acessível fora do bloco if)

// Exemplo com let
let sobrenome = "Silva";
console.log(sobrenome); // Saída: Silva

if (true) {
    let cidade = "São Paulo";
    console.log(cidade); // Saída: São Paulo
}

// console.log(cidade); // Erro! cidade não é acessível fora do bloco if

// Exemplo com const
const PI = 3.14159;
console.log(PI); // Saída: 3.14159

// PI = 3; // Erro! Tentativa de reatribuir valor a uma constante
```
- Exemplos de exercícios para fixação
  ```  javascript
  // Exemplo de exercício com variáveis em JavaScript
  
  // 1. Declare uma variável usando 'var' para armazenar a idade de uma pessoa
  var idade = 30;
  
  // 2. Declare uma variável usando 'let' para armazenar o nome da pessoa
  let nome = "João";
  
  // 3. Declare uma constante para armazenar o país de origem da pessoa
  const paisDeOrigem = "Brasil";
  
  // 4. Atualize a idade da pessoa
  idade = 35;
  
  // 5. Tente atualizar o nome da pessoa
  nome = "Maria";
  
  // 6. Tente atualizar o país de origem da pessoa
  // paisDeOrigem = "EUA"; // Isso gerará um erro, pois não podemos reatribuir valores a uma constante
  
  // 7. Imprima as informações da pessoa
  console.log("Nome:", nome);
  console.log("Idade:", idade);
  console.log("País de origem:", paisDeOrigem);
  ```