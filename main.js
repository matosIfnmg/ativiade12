// Define o corpo (body) do documento como a área de criação.
const container = document.body;

// Estiliza o body para que a "chuva" ocupe a tela inteira.
container.style.margin = '0';
container.style.padding = '0';
container.style.overflow = 'hidden'; // Evita barras de rolagem
container.style.backgroundColor = '#2c3e50'; // Um fundo escuro para destacar

// Array de emojis que podem "chover" - Sinta-se à vontade para mudar!
const emojis = ['💻', '💡', '🚀', '🤖', '✨', '🎉', '🧠'];

// Função para criar um único floco de "chuva" (um emoji)
function criarFlocoDeChuva() {
  // Cria um novo elemento <div> para ser o nosso floco
  const floco = document.createElement('div');

  // Seleciona um emoji aleatório do nosso array
  const emojiAleatorio = emojis[Math.floor(Math.random() * emojis.length)];
  floco.innerText = emojiAleatorio;

  // Estiliza o floco
  floco.style.position = 'absolute';
  floco.style.fontSize = `${Math.random() * 20 + 15}px`; // Tamanho aleatório
  floco.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória (vw = viewport width)
  floco.style.top = `${Math.random() * -50}px`; // Começa um pouco acima da tela
  floco.style.opacity = Math.random() + 0.3; // Opacidade aleatória
  floco.style.userSelect = 'none'; // Impede que o usuário selecione o emoji com o mouse

  // Adiciona o floco criado ao corpo da página
  container.appendChild(floco);

  // Anima a queda do floco
  animarQueda(floco);
}

// Função para animar a queda de um floco
function animarQueda(floco) {
  let velocidade = Math.random() * 3 + 2; // Velocidade de queda aleatória

  function mover() {
    // Pega a posição vertical atual e a converte para número
    let posicaoAtual = parseFloat(floco.style.top);

    // Se o floco já passou do final da tela...
    if (posicaoAtual > window.innerHeight) {
      // ...ele volta para o topo em uma nova posição horizontal.
      floco.style.top = '-50px';
      floco.style.left = `${Math.random() * 100}vw`;
    } else {
      // ...senão, ele continua caindo.
      floco.style.top = `${posicaoAtual + velocidade}px`;
    }

    // Continua o ciclo de animação de forma otimizada
    requestAnimationFrame(mover);
  }

  // Inicia a animação
  mover();
}

// Cria 50 flocos de chuva iniciais para preencher a tela
for (let i = 0; i < 50; i++) {
  criarFlocoDeChuva();
}