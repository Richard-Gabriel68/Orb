let circulo = document.querySelector(".circulo")
let nome = document.querySelector("h1")
let botao = document.querySelector("button")

circulo.addEventListener("click", ()=>{
    nome.style.color = "#739c44"
    nome.style.marginBottom = "2rem"

    botao.style.marginTop = "2rem"
    botao.style.color = "#fff"
    botao.style.backgroundColor = "#3c3163b2"
})