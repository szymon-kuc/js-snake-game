const skinTexture = "https://raw.githubusercontent.com/IronKnight545/snake/master/assets/skin.jpg";
const headTexture = "https://raw.githubusercontent.com/IronKnight545/snake/master/assets/head.jpg";


let skin = new Image();
skin.src= skinTexture;

let head = new Image();
head.src= headTexture;

export default class Snake {
    constructor(gameWidth, gameHeight){
        this.snake= [{x: 30*4, y: 30},{x: 30*3, y: 30},{x: 30*2, y: 30},{x: 30, y: 30}];
        this.vectorX = 30;
        this.vectorY = 0;
        this.size = 30;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.length = this.snake.length;
        this.maxLength = this.snake.length;
        this.pause = false;
    }
    restart(){
        this.snake = [{x: 30*4, y: 30},{x: 30*3, y: 30},{x: 30*2, y: 30},{x: 30, y: 30}];
        this.vectorX = 30;
        this.vectorY = 0;
        this.length = this.snake.length;
    }
    eat(fruit) {
        if(this.snake[0].x == fruit.x && this.snake[0].y == fruit.y){
            this.snake.unshift({x: this.snake[0].x + this.vectorX, y: this.snake[0].y + this.vectorY});
            fruit.x =  Math.floor(Math.random() * 27)*30;
            fruit.y =  Math.floor(Math.random() * 20)*30;
            this.length++;
            if(this.length > this.maxLength){
                this.maxLength = this.length;
            }
        }
    }
    pauseGame(ctx){
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(0,0, this.gameWidth, this.gameHeight);

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Paused", this.gameWidth /2, this.gameHeight/2);
    }

    draw(ctx){
        let pattern = ctx.createPattern(skin, "repeat")
        ctx.fillStyle = pattern;
        //delet last + add new
        if(this.pause == false){
            this.snake.pop();
            this.snake.unshift({x: this.snake[0].x + this.vectorX, y: this.snake[0].y + this.vectorY});
            if(this.snake[0].x + this.size > this.gameWidth || this.snake[0].x < 0 || this.snake[0].y<0 || this.snake[0].y + this.size > this.gameHeight){
                this.restart();
            } 
        }
        //draw all body
        for(let i=0;i<this.snake.length;i++){
            ctx.fillRect(this.snake[i].x ,this.snake[i].y, this.size, this.size);
            if(this.snake[i].x == this.snake[0].x && this.snake[i].y == this.snake[0].y && i>0){
                this.restart();
            }
        }
    }
    drawHead(ctx){
        let pattern = ctx.createPattern(head, "repeat")
        ctx.fillStyle = pattern;
        ctx.fillRect(this.snake[0].x  ,this.snake[0].y, this.size, this.size)
    }

}