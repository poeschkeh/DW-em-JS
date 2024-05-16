let inputTelefone = document.querySelector("input")
let btnLink = document.querySelector("gerar-link-button")
let btnSend = document.querySelector("copiar-link-button")
let linkTexto = document.querySelector("link")
let mensagem = document.querySelector("mensagem")
//let resultLink = document.querySelector("#resultLink")

//Padrão para definir o formato do telefone (xx)xxxxx-xxxx
const regex = /(\d{2})(\d{5})(\d{4})/;

function handleBtnLink(){
    const numeroFormatado = numero.value.replace(regex, "($1) $2-$3")
    console.log(numeroFormatado)
    const link = "https://wa.me/" + numeroFormatado
    console.log(link) 
}

function handleBtnSend(){
    const linkNovaAba = "https://wa.me/" + numero.value
    const win = window.open(linkNovaAba, "_blank")
    win.focus()
}

btnLink.addEventListener("click", handleBtnLink)
btnSend.addEventListener("click", handleBtnSend)
