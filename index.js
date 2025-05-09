const messageButton = document.querySelector('.message-button');
const message = document.querySelector('.message');
const messageContainer = document.querySelector('.message-container');

messageButton.addEventListener('click', showMessage);

const messages = [
    "Se a vida te der limões, faça uma limonada… ou jogue os limões em quem te fez mal!",
    "A vida é curta. Sorria enquanto ainda tem dentes!",
    "Se você acha que não pode, lembre-se que o pato que não sabe voar também bate suas asas e tenta!",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário. Então, vamos lá, comece a organizar suas palavras!",
    "A vida é como uma pizza: pode ter alguns ingredientes não tão bons, mas no final, ainda é pizza!",
    "Se você não está se divertindo, está fazendo isso errado. Vamos lá, mude a música!",
    "Se você caiu, levante-se! E se estiver difícil, levante-se devagar, mas com estilo!",
    "Acorde, sorria e tente de novo… e de novo… e de novo!",
    "Se a vida fosse um filme, eu seria o comediante que faz você rir até esquecer das cenas tristes!",
    "Quando tudo mais falhar, lembre-se: rir é grátis!"
];


function showMessage() {
    const computedStyle = window.getComputedStyle(messageContainer);
    const isHidden = computedStyle.display === "none";
    const messageContent = `"${messages[Math.floor(Math.random() * messages.length)]}"`;
  
    if (isHidden) {
      messageContainer.style.display = "block";
      messageButton.innerHTML = "Clique aqui para fechar a mensagem";
      message.innerText = messageContent;
    } else {
      messageContainer.style.display = "none";
      messageButton.innerHTML = "Clique aqui para ver uma mensagem!";
    }
  }