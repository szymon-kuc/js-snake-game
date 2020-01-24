

export default class InputHandler {
    constructor(snake) {
        document.addEventListener('keydown', event => {

            switch(event.keyCode){
                case 40:
                    if(snake.vectorY==0){
                        snake.vectorX = 0;
                        snake.vectorY = 30;
                    }
                    break;
                case 37:
                    if(snake.vectorX==0){
                        snake.vectorX = -30;
                        snake.vectorY = 0;
                    }
                    break;
                case 38:
                    if(snake.vectorY==0){
                        snake.vectorX = 0;
                        snake.vectorY = -30;
                    }
                    break;
                case 39:
                    if(snake.vectorX==0){
                        snake.vectorX = 30;
                        snake.vectorY = 0;
                    }
                    break;
                case 27:
                    if(snake.pause == false){
                        snake.pause = true;
                    } else {
                        snake.pause = false;
                    }

                    break;
            }
        });

    }
}