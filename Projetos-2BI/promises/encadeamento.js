// console.log("teste")

function pedirPizza(tempo=2000, saborDisponivel=true){
    console.log("Iniciando o pedido da Pizza")
    const promessa = new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (saborDisponivel) {
                resolve("Pizza a caminho")
            } else{
                reject(new Error("Não será possível entregar a pizza pedida"))
            }
        }, tempo)
    })
    return promessa;
}

function pedirUber(tempo=2000, motoristaDisponivel=true){
    console.log("Iniciando a solicitação da corrida")

    const promessa = new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (motoristaDisponivel) {
                resolve("Motorista a caminho")
            } else{
                reject(new Error("Não há motoristas disponíveis"))
            }
        }, tempo)
    })
    return promessa;
}

function irConfraternizacao(){
    pedirPizza(1000, false)
    .then((resposta) => {
        console.log(resposta)
        console.log("A pizza chegou")
        return pedirUber()
    }) //UMA OUTRA FORMA DE FAZER É APLICANDO O THEN ABAIXO DENTRO DESTE THEN DE CIMA
    .then((resposta) =>{
        console.log(resposta)
        console.log("Motorista chegou")
    })
    .catch(erro => {
        console.log("Não conseguirei ir à confraternização")
        console.log(erro)
    })
}
irConfraternizacao()

// pedirPizza(5000, false)
//     .then((resposta) => console.log(resposta))
//     .catch((erro) => console.log(erro))