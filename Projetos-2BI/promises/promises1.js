function funcaoAssincrona(sucesso=true) {
    // console.log("Função Assíncrona")
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (sucesso)
                resolve("Operação concluída com sucesso")
            else 
                reject("Erro na operação")
        }, 2000)
    })
}

funcaoAssincrona() //Se não passar um parâmetro ele assume como se for um valor falso(else)
    .then(resposta => {
        console.log("Deu certo")
        console.log("Resultado:" + resposta)
    })

    .catch((erro) => {
        console.log("Deu ruim")
        console.log("Resultado:" + erro)
    })

console.log("fim")