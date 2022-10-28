const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( elemento => {
    elemento.addEventListener("click", evento => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    }) // evento.target nos trás o elemento em que estamos clicando do html (o bloco de código)
       // evento.target.textContent nos trás o conteúdo daquele elemento, nesse caso será (+) ou (-)
       // textContent para textos e value para inputs
       // evento.target.parentNode nos trás o elemento que está acima do elemento em que estamos, ou seja, o elemento pai
})

 function manipulaDados(operacao, controle) {
    const peca = controle.querySelector(".controle-contador")
    
    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
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