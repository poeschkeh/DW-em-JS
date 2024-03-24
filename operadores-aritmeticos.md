# Operadores Básicos
# Operadores Aritméticos
Os Operadores Aritméticos são utilizados para realizar operações matemáticas em valores numéricos. Eles seguem as mesmas regras padrão da matemática.

Os principais operadores aritméticos são:
- Adição(+)
- Subtação(-)
- Multiplicação(*)
- Divisão(/)
- Módulo(%)
- Incremeneto(++)
- Decremento(--)

```js
// Definindo duas variáveis para realizar operações aritméticas
var a = 10;
var b = 3;

// Adição
var soma = a + b; // 10 + 3 = 13

// Subtração
var diferenca = a - b; // 10 - 3 = 7

// Multiplicação
var produto = a * b; // 10 * 3 = 30

// Divisão
var quociente = a / b; // 10 / 3 = 3.33333333...

// Módulo (resto da divisão)
var resto = a % b; // 10 % 3 = 1

// Incremento
var incremento = a++; // Incrementa 'a' em 1 (a = 11), mas retorna o valor anterior de 'a' (10)

// Decremento
var decremento = b--; // Decrementa 'b' em 1 (b = 2), mas retorna o valor anterior de 'b' (3)

// Exibindo os resultados no console
console.log("Soma:", soma);
console.log("Diferença:", diferenca);
console.log("Produto:", produto);
console.log("Quociente:", quociente);
console.log("Resto:", resto);
console.log("Incremento:", incremento); // Saída: 10
console.log("Valor atual de 'a':", a); // Saída: 11
console.log("Decremento:", decremento); // Saída: 3
console.log("Valor atual de 'b':", b); // Saída: 2
```

- Exercício para fixação:
```js
// Definindo as dimensões do retângulo
var comprimento = 10; // Comprimento do retângulo
var largura = 5; // Largura do retângulo

// Calculando a área do retângulo
var area = comprimento * largura;

// Calculando o perímetro do retângulo
var perimetro = 2 * (comprimento + largura);

// Exibindo os resultados no console
console.log("Área do retângulo:", area);
console.log("Perímetro do retângulo:", perimetro);
```