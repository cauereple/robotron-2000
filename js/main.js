const robotron = document.querySelector("#robotron");

// podemos fazer dessa forma, chamando a nossa funçao
//robotron.addEventListener("click", dizOi);

// ou podemos fazer com uma funçao anonima dentro do nosso evento
robotron.addEventListener("click", (evento) => {
    console.log("cliquei no robo");
})

function dizOi(nome) {
    console.log("Oi " + nome)
    console.log("oi");
}