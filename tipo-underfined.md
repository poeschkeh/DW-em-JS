# Tipos de Dados
## Tipos Primitivos
### Underfined
O Tipo Primitivo Undefined representa um valor especial que é atribuído a uma variável que foi declarada, mas ainda não teve um valor atribuído a ela, ou seja, quando uma variável é declarada, mas não inicializada, ou quando uma função não retorna um valor, o JavaScript automaticamente atribui o valor undefined a essa variável ou retorno de função.

```js
// Declarando uma variável sem atribuir um valor a ela
var x;
console.log(x); // Saída: undefined

// Declarando uma função que não retorna nenhum valor
function semRetorno() {
   // Esta função não retorna nada explicitamente
}

// Chamando a função e armazenando o resultado em uma variável
var resultado = semRetorno();
console.log(resultado); // Saída: undefined

// Acessando uma propriedade indefinida de um objeto
var objeto = {};
console.log(objeto.propriedade); // Saída: undefined

// Comparando com undefined
var y;
console.log(y === undefined); // Saída: true
```

- Exercício para fixação:
```js
// Função que verifica se o parâmetro foi fornecido
function verificarParametro(parametro) {
    if (parametro === undefined) {
        return undefined; // Retorna undefined se o parâmetro não foi fornecido
    } else {
        return "O parâmetro fornecido é: " + parametro;
    }
}

// Testando a função
console.log(verificarParametro()); // Saída: undefined
console.log(verificarParametro("valor")); // Saída: O parâmetro fornecido é: valor
```