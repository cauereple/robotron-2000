const braco = document.querySelector("#braco")

const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( elemento => {
    elemento.addEventListener("click", evento => {
        manipulaDados(evento.target.textContent);
    })
})

 function manipulaDados(operacao) {
    if(operacao === "-") {
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
 }

// podemos fazer dessa forma, chamando a nossa funçao
//robotron.addEventListener("click", dizOi);

// ou podemos fazer com uma funçao anonima dentro do nosso evento
// robotron.addEventListener("click", (evento) => {
//     console.log("cliquei no robo");
// })

// function dizOi(nome) {
//     console.log("Oi " + nome)
//     console.log("oi");
// }