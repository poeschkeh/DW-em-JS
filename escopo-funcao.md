## Escopo
### EScopo de Função
O Escopo de Função se refere à visibilidade e acessibilidade de variáveis e funções dentro de uma determinada função. Quando declaramos variáveis dentro de uma função elas têm escopo local, ou seja, elas só podem ser acessadas dentro dessa função específica. 

O Escopo de Função permite que variáveis e funções sejam guardadas dentro de uma função, o que evita colisões de nomes com variáveis e funções definidas em outros lugares do código.

- Exemplo:
```javascript
function minhaFuncao() {
    // Variável com escopo local à função minhaFuncao
    var variavelLocal = "Eu sou uma variável local";
    
    console.log(variavelLocal); // Saída: "Eu sou uma variável local"
}

minhaFuncao();

// Tentando acessar a variável variavelLocal fora da função resultaria em um erro
//console.log(variavelLocal); // Isso resultaria em um erro
```

- Exercício para fixação de Escopoi de Função:
```javascript
function calcularSoma() {
    // Variável com escopo local à função calcularSoma
    var num1 = 5;
    var num2 = 10;

    function soma() {
        // Função interna para calcular a soma de num1 e num2
        return num1 + num2;
    }

    // Chamar a função interna soma() e imprimir o resultado
    console.log("A soma de", num1, "e", num2, "é:", soma());
}

calcularSoma(); // Chamando a função calcularSoma
```