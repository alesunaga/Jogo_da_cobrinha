let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //renderiza 
let box = 32; // tamanho do quadradinho
let snake = [];

snake[0]={
    x:8*box,
    y:8*box
}

let direction = "right";

function criarBG() {
    context.fillStyle = "lightgreen"; // define a cor do canvas
    context.fillRect(0, 0, 16 * box, 16 * box); // desenha o retângulo no qual o jogo - x, y, altura, largura
}

function criarCobrinha() {
    for( i=0; i < snake.length; i++) { //cria um array de coordenadas, cria um e apaga o último
        context.fillStyle="green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

funtion iniciarJogo() {
    criarBG();
    criarCobrinha();

    let snakeX = skake[0].x; //ajusta as posições iniciais da cobrinha
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box; //acrescenta 1 quadradinho à direita
    if(direction == "left") snakeX -= box; //decrementa 1 quadradinho à esquerda
    if(direction == "up") snakeY -= box; //decrementa 1 quadradinho para cima
    if(direction == "down") snakeY += box; //decrementa 1 quadradinho para baixo

    snake.pop(); //retira o último elemento do array

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    
    snake.unshift(newHead);
}

let jogo = setInterval (inicarJogo, 100); // taxa de atualização dos frames do jogo em milissegundos

