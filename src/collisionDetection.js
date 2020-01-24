export function detectCollision(snakeHead, gameObject){
    let bottomOfBall = snakeHead.y;
    let topOfBall = ball.position.y;
    let topOfObject = gameObject.position.y;
    let leftSideOfObject = gameObject.position.x;
    let rightSideOfObject = gameObject.position.x + gameObject.width;
    let bottomOfObject = gameObject.position.y + gameObject.height;

        if(
            bottomOfBall >= topOfObject &&
            topOfBall <= bottomOfObject &&
            ball.position.x >= leftSideOfObject && 
            ball.position.x <= rightSideOfObject
        ){
            return true;
        }
        else {
            return false;
        }
}