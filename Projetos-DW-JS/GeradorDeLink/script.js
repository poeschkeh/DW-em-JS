const Telefone = document.querySelector("input")
const btnLink = document.querySelector("gerar-link-button")
const btnSend = document.querySelector("copiar-link-button")
const linkTexto = document.querySelector("linkTexto")
const mensagem = document.querySelector("mensagem")

const regex = /(\d{2})(\d{5})(\d{4})/; //Padrão para definir o formato do telefone (xx)xxxxx-xxxx

Telefone.addEventListener("input", (evento) => {
    console.log(evento.target.value)
    evento.target.value = evento.target.value.replace(/\D/g, "");
    evento.target.value = evento.target.value.replace(regex, "($1) $2-$3");
    if (evento.target.value.length === 11){
        evento.target.classList.add("telefoneValido");
    } else {
        evento.target.classList.remove("telefoneValido");
    }
});

Telefone.addEventListener("focus", ()=> {
    mensagem.textContent = " "
})

function handleBtnLink(){
    console.log('Hellen')
    const numeroFormatado = Telefone.value.replace(/(\d{2})(\d{5})-(\d{4})/, "($1) $2-$3");
    const link = "https://wa.me/" + numeroFormatado
    linkTexto.textContent = link;
    mensagem.textContent = "Clique no link para copiar";
    linkTexto.style.border = "1px solid black";
    linkTexto.style.borderRadius = "5px";
}

function handleBtnSend(){
    console.log('Hellen')
    const linkNovaAba = "https://wa.me/" + numero.value;
    const win = window.open(linkNovaAba, "_blank");
    win.focus();
}

linkTexto.addEventListener("click", () => {
    navigator.clipboard.writeText(linkTexto.textContent)
        .then(() => {
            mensagem.textContent = "Link copiado para área de transferência";
        })
        .catch((err) => {
            console.error("Falha ao copiar p texto:", err);
        });
});

btnLink.addEventListener("click", handleBtnLink);
btnSend.addEventListener("click", handleBtnSend);