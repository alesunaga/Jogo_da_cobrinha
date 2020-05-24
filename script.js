let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //renderiza 
let box = 32; // tamanho do quadradinho
let snake = [];

snake[0]={
    x:8*box,
    y:8*box
}

let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box, 
    y: Math.floor(Math.random() * 15 + 1) * box //gerar números aleatórios sem a parte flutuante - vírgula
}

function criarBG() {
    context.fillStyle = "lightgreen"; // define a cor do canvas
    context.fillRect(0, 0, 16 * box, 16 * box); // desenha o retângulo no qual o jogo - x, y, altura, largura
}

function drawFood() { // cria a comidinha
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

function criarCobrinha() {
    for( i=0; i < snake.length; i++) { //cria um array de coordenadas, cria um e apaga o último
        context.fillStyle="green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

document.addEventListener('keydown', update); //ele vai ler o botão e chamar a função udate

function update (event) { // se o número for 37,38,39, 40 (direita, esquerda, cima, baixo)
    if(event.keyCode == 37 && direction != "right") direction = "left" ;//a nova direção não deve ser oposta
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";

}

function iniciarJogo() {

    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 * box && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 * box && direction == "up") snake[0].y = 16 * box;

    for(i = 1; i < snake.length; i++) {
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            alert('GameOver :(')
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x; //ajusta as posições iniciais da cobrinha
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box; //acrescenta 1 quadradinho à direita
    if(direction == "left") snakeX -= box; //decrementa 1 quadradinho à esquerda
    if(direction == "up") snakeY -= box; //decrementa 1 quadradinho para cima
    if(direction == "down") snakeY += box; //decrementa 1 quadradinho para baixo

    if(snakeX != food.x || snakeY != food.y) { //faz a comidinha sumir quando a cobrina encosta nela
        snake.pop();
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box, 
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    snake.pop(); //retira o último elemento do array

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    
    snake.unshift(newHead);
}

let jogo = setInterval (iniciarJogo, 200); // taxa de atualização dos frames do jogo em milissegundos

