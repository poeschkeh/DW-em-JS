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

function pedirRefrigerante(tempo=2000, refriDisponivel=true){
    console.log("Iniciando o pedido do refrigerante")

    const promessa = new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (refriDisponivel) {
                resolve("Refri a caminho")
            } else{
                reject(new Error("Não será possível entregar o refrigerante"))
            }
        }, tempo)
    })
    return promessa;
}

function pedirMaisComida(){
    Promise.all([pedirPizza(), pedirRefrigerante()])
    .then(respostas => {
        console.log(respostas)
    })
    .catch(erro => console.log(erro))
}

pedirMaisComida()
