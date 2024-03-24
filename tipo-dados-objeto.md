# Tipos de Dados
## Objeto
O Tipo de Dados Objeto é uma estrutura de dados que permite armazenar múltiplos valores relacionados como um único objeto. É uma coleção não ordenada de pares chave/valor, onde as chaves são strings e os valores podem ser de qualquer tipo de dado, incluindo outros objetos, funções e tipos primitivos.

```js
// Definindo um objeto chamado pessoa que representa informações sobre uma pessoa, como nome, idade e cidade.
var pessoa = { 
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

// Acessando as propriedades do objeto e exibindo no console
console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);
console.log("Cidade:", pessoa.cidade);
```

- Exercício:
```js
// Definindo um objeto chamado produto que representa um produto em uma loja, contendo informações como nome, preço e quantidade em estoque.
var produto = {
    nome: "Camiseta",
    preco: 29.99,
    quantidadeEstoque: 50
};

// Função para calcular o valor total em estoque do produto
function calcularValorTotal(produto) {
    return produto.preco * produto.quantidadeEstoque;
}

// Exibindo informações sobre o produto e o valor total em estoque
console.log("Nome do produto:", produto.nome);
console.log("Preço do produto:", produto.preco);
console.log("Quantidade em estoque:", produto.quantidadeEstoque);
console.log("Valor total em estoque:", calcularValorTotal(produto));
```