const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

somar.addEventListener("click", (evento) => {
   braco.value = parseInt(braco.value) + 1;
})

subtrair.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) - 1;
 })

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