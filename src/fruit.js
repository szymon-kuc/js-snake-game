export default class Fruit{
    constructor(){
        this.fruit = {x: Math.floor(Math.random() * 27)*30, y:Math.floor(Math.random() * 20)*30 };
        this.size = 30;
        this.img_fruit = document.getElementById("apple");
    }
    draw(ctx){
        ctx.drawImage(this.img_fruit, this.fruit.x, this.fruit.y, this.size, this.size);
    }
}