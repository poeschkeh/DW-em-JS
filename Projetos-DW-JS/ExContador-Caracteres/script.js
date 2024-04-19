const inputTexto = document.querySelector("[input-texto]")
const btnContar = document.querySelector("[btn-contar]")
const divContador = document.querySelector("[text-contador]")

let tipoContagem = "caracteres"

function handleBtnContar(evento){
    if (tipoContagem == "caracteres") {
        evento.target.innerText = "Contar Palavras"
        tipoContagem = "palavras"
    } else{
        evento.target.innerText = "Contar Caracteres"
        tipoContagem = "caracteres"
    }
}

const handleInputTexto = (evento) => {
    console.log(evento.target.value)
}

btnContar.addEventListener("click", handleBtnContar) //FUNÇÃO GENÉRICA PARA CLIQUE
//BtnContar.onclick = handleBtnContar //FUNÇÃO ESPECÍFICA PARA CLIQUE
inputTexto.addEventListener("input", handleInputTexto)