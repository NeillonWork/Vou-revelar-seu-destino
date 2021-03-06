
const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const botaoPerguntar = document.querySelector("#botaoPerguntar")

const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]
// clicar em fazer pergunta
function fazerPergunta() {
  if (inputPergunta.value == "") {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-center',
      showConfirmButton: false,
      timer: 4500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      title: 'Digite sua pergunta na caixa de Texto!'
    })
    return
  }

  //travar botão
  botaoPerguntar.setAttribute("disabled", true)
  botaoPerguntar.style.opacity = 0;
  //botaoPerguntar.style.display = "none"
  //botaoPerguntar.style.background = "#5900ac"
  //botaoPerguntar.style.color = "#5900ac"


  const pergunta = "<div>" + inputPergunta.value + "</div>"

  //gerar numero aleatorio
  // Math.floor -->  arredondamento ao "Piso"
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)


  switch (inputPergunta.value) {
    case 'ola':
      respostas[numeroAleatorio] = "Olá, tudo bem com você ?";
      break

    case 'O palmeiras tem mundial?':
    case 'O palmeiras tem mundial':
    case 'Palmeiras tem mundial?':
    case 'palmeiras tem mundial?':
    case 'Palmeiras tem mundial':
    case 'palmeiras tem mundial':
      respostas[numeroAleatorio] = "Vi de tudo na vida, menos o mundial do Palmeiras!";
      break

    case 'Quem descobriu o Brasil':
    case 'Quem descobriu o Brasil?':
      respostas[numeroAleatorio] = "Napoleão Bonaparte, pode colocar na prova que você passa de ano. Confia no pai!";
      break

  }

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(respostas[numeroAleatorio]));

  elementoResposta.style.opacity = 1;
  // limpar respóstas após 4 segundos
  setTimeout(function () {
    elementoResposta.style.opacity = 0;
    botaoPerguntar.removeAttribute("disabled")
    botaoPerguntar.style.opacity = 1;
    botaoPerguntar.style.background = "blueviolet"
    botaoPerguntar.style.color = "white"
  }, 6000)
}
//console.log(numeroAleatorio)
