//const controle = document.querySelectorAll(".controle-ajuste") // ao invés de buscarmos pela nossa classe controle-ajuste, vamos buscar pelo nosso data attribute
const controle = document.querySelectorAll("[data-controle]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


controle.forEach( elemento => {
    elemento.addEventListener("click", evento => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    }) // evento.target nos trás o elemento em que estamos clicando do html (o bloco de código)
       // evento.target.textContent nos trás o conteúdo daquele elemento, nesse caso será (+) ou (-)
       // textContent para textos e value para inputs
       // evento.target.parentNode nos trás o elemento que está acima do elemento em que estamos, ou seja, o elemento pai
       // vamos deixar de usar o texto do nosso atributo (textContent) e passar a buscar pelo valor do nosso data attribute que nomeamos como controle. Ou seja, nós estamos desacoplando nosso HTML do Javascript
})

 function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    
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