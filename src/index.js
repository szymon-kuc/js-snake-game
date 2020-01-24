import Snake from './snake.js';
import InputHandler from './inputHandler.js'
import Fruit from './fruit.js';


let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 810;
const GAME_HEIGHT = 600;

const fruitObj = new Fruit();
const snakeBody = new Snake(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(snakeBody);

let statistics = document.getElementsByClassName("info");
let length = statistics[0];
let maxLength = statistics[1];
setInterval(() => {
    ctx.clearRect(0,0, GAME_WIDTH, GAME_HEIGHT);
    fruitObj.draw(ctx);
    snakeBody.eat(fruitObj.fruit);
    snakeBody.draw(ctx);
    length.innerHTML = "Current length: "+snakeBody.length;
    maxLength.innerHTML = "Max length: "+snakeBody.maxLength;
    if(snakeBody.pause==true){
        snakeBody.pauseGame(ctx);
    }
}, 400);



