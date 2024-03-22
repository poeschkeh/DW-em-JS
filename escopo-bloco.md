## Escopo
### Escopo de Bloco
O Escopo de Bloco é utilizado no ECMAScript 6 (ES6), se refere à ideia de que variáveis declaradas com "let" e "const" têm um escopo limitado ao bloco em que foram definidas. Por sua vez, um bloco é definido por chaves "{}" e pode ser uma função, como um loop "for", um if, ou qualquer outro tipo de bloco delimitado por chaves.

Ao declarar variáveis dentro de um bloco "{}" não é possível acessá-las de fora do bloco. Entretanto, ao declarar variáveis ​​dentro de um bloco "{}" utilizando "var" é possível acessá-las de fora do bloco.

Quando declaramos variáveis com a palavra-chave "var" não podemos ter escopo de bloco.

- Exemplo:
```javascript
function exemploEscopoBloco() {
    let a = 10;

    if (true) {
        let b = 20;
        const c = 30;
        console.log(a); // a é acessível aqui
        console.log(b); // b é acessível aqui
        console.log(c); // c é acessível aqui
    }

    console.log(a); // a é acessível aqui
    console.log(b); // Isso resultaria em um erro, b não é acessível aqui
    console.log(c); // Isso resultaria em um erro, c não é acessível aqui
}

exemploEscopoBloco();
```

- Exercício para fixação de escopo de bloco:
```javascript
function exemploEscopoBloco() {
    let a = 5; // Variável com escopo de bloco

    if (true) {
        let b = 10; // Variável com escopo de bloco dentro do bloco do 'if'
        console.log("Dentro do bloco do 'if':");
        console.log("a:", a); // 'a' é acessível dentro do bloco do 'if'
        console.log("b:", b); // 'b' é acessível dentro do bloco do 'if'
    }

    console.log("Fora do bloco do 'if':");
    console.log("a:", a); // 'a' é acessível fora do bloco do 'if'
    //console.log("b:", b); // Isso resultaria em um erro, 'b' não é acessível aqui
}

exemploEscopoBloco();
```