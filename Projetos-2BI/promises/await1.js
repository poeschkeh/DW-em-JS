function funcaoAssincrona(sucesso=true) {
    // console.log("Função Assíncrona")
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (sucesso)
                resolve("Operação concluída com sucesso")
            else 
                reject(new Error ("Erro na operação"))
        }, 2000)
    })
}

//Await faz com que a funcaoAssincrona abaixo não seja executada e só funciona em funções assíncronas
async function executaFuncaoAssincrona(){
    try{
        const resposta = await funcaoAssincrona(false) 
        console.log(resposta)
        console.error("Resultado" + resposta)
    } catch(erro){
        console.error("Deu ruim. Tente novamente mais tarde")
        console.error("Resultado" + erro)
    }

}

executaFuncaoAssincrona()