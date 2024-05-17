const telefone = document.querySelector("#input")
const btnLink = document.querySelector("#gerar-link-button")
const btnSend = document.querySelector("#copiar-link-button")
const linkTexto = document.querySelector("#linkTexto")
const mensagem = document.querySelector("#mensagem")

const regex = /(\d{2})(\d{5})(\d{4})/; //Padrão para definir o formato do telefone (xx)xxxxx-xxxx

telefone.addEventListener("input", (evento) => {
    console.log(evento.target.value)
    evento.target.value = evento.target.value.replace(/\D/g, "");
    evento.target.value = evento.target.value.replace(regex, "($1) $2-$3");
    if (evento.target.value.length === 15){
        evento.target.classList.add("telefoneValido");
    } else {
        evento.target.classList.remove("telefoneValido");
    }
});

telefone.addEventListener("focus", () => {
    mensagem.textContent = " "
    linkTexto.textContent = " "
    linkTexto.classList.remove("bordaTelefone")
})

function handleBtnLink(){
    const telefoneFormatado = telefone.value.replace(/\D/g, ""); //Remove o que não é número
    if(telefoneFormatado.length === 11){
        const link = "https://wa.me/55" + telefoneFormatado;
        linkTexto.textContent = link;
        mensagem.textContent = "Clique no link para copiar";
        //linkTexto.style.border = "1px solid black";
        //linkTexto.style.borderRadius = "5px";
        linkTexto.classList.add("bordaTelefone") //Para remover o campo do link abaixo do campo "Telefone"
    } else {
        alert("Erro. O número deve conter 11 dígitos!")
    }
}

function handleBtnSend(){
    const telefoneFormatado = telefone.value.replace(/\D/g, "");
    if(telefoneFormatado.length === 11){
        const linkNovaAba = "https://wa.me/" + telefoneFormatado;
        const win = window.open(linkNovaAba, "_blank");
        win.focus();
    } else {
        alert("Erro. O número deve conter 11 dígitos!")
    }
}

linkTexto.addEventListener("click", () => {
    navigator.clipboard.writeText(linkTexto.textContent)
        .then(() => {
            mensagem.textContent = "Link copiado para área de transferência";
        })
        .catch((err) => {
            console.error("Falha ao copiar o texto:", err);
        });
});

btnLink.addEventListener("click", handleBtnLink);
btnSend.addEventListener("click", handleBtnSend);