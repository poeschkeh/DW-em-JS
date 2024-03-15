# Variáveis
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

## Declaração de Variáveis

## Escopo

### Global

### Bloco

### Função