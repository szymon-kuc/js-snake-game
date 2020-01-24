import Snake from './snake.js'


let snake = new Snake(800, 600);
export default class SnakeBody {
    constructor(gameWidth, gameHeight, index){
        this.size = 24;
        this.index = index;
        this.length = 4;
        this.speed= 0;
        this.maxSpeed = 3;
        this.xAxis = false;

        this.position = {x: 50 -24 * this.index, y: 20};
    }

    moveLeft(){
        this.xAxis = true;
        this.speed = -this.maxSpeed;
    }
    moveRight(){
        this.xAxis = true;
        this.speed = this.maxSpeed;
    }
    moveDown(){
        this.xAxis = false;
        this.speed = this.maxSpeed;
    }
    moveUp(){
        this.xAxis = false;
        this.speed = -this.maxSpeed;
    }

    draw(ctx){
        ctx.fillStyle = "#037ffc";
        ctx.fillRect(this.position.x , this.position.y, this.size, this.size);
        
    }

    update(deltaTime){
        if(this.xAxis == true){;
            this.position.x += this.speed;
        }
        else{
            this.position.y += this.speed;
        }
    }
}