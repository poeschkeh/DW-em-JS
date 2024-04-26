const inputTexto = document.querySelector("[input-texto]")
const btnContar = document.querySelector("[btn-contar]")
const divContador = document.querySelector("[text-contador]")

let tipoContagem = "caracteres" //ESSE LET ALTERA ENTRE CONTAGEM DE CARACTERES E DE PALAVRAS

function handleBtnContar(evento){
    if (tipoContagem == "Caracteres") {
        evento.target.innerText = "Contar Palavras";
        tipoContagem = "Palavras";
    } else{
        evento.target.innerText = "Contar Caracteres";
        tipoContagem = "Caracteres";
    }
    handleInputTexto();//ATUALIZA A EXIBIÇÃO DO CONTADOR 
}

function handleInputTexto(){
    //console.log(evento.target.value)
    const texto = inputTexto.value //TEXTO ARMAZENA O VALOR ATUAL DO ELEMENTO INPUTTEXTO.VALUE E RETORNA O VALOR ATUAL DO INPUT DO TEXTO
    if(tipoContagem == "Caracteres"){
        divContador.innerText = texto.length + ' caracteres'
    } else{
        const countWords = texto.trim().split(" ").filter(Boolean); //CONSTACOUNT CONTA A QUANT DE PALAVRAS
        divContador.innerText = countWords.length + " palavras";       
    }//TEXTO.TRIM() RETORNA O TEXTO SEM ESPAÇOS VAZIOS NO INÍCIO E NO FINAL
    //TEXTO.TRIM().SPLIT(" ") DIVIDE O TEXTO EM UM ARRAY DE PALAVRAS, ONDE CADA PALAVRA É UM ELEMENTO DO ARRAY, E .filter(Boolean) REMOVE TODOS OS ELEMENTOS VAZIOS DO ARRAY RESULTANTE DE TEXTO.TRIM().SPLIT(" ")
}

btnContar.addEventListener("click", handleBtnContar) //FUNÇÃO GENÉRICA PARA CLIQUE
//BtnContar.onclick = handleBtnContar //FUNÇÃO ESPECÍFICA PARA CLIQUE
inputTexto.addEventListener("input", handleInputTexto)
handleInputTexto(); //ATUALIZA O CONTADOR