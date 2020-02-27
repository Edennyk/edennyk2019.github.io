const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const backgroundimage = new Image();
backgroundimage.src = 'back.jpg';
var score = 0;

function GameObject(src, width, height){
    this.x = 0;
    this.y = 0;
    this.image = new Image();
    this.image.src = src;
    this.width = width;
    this.height = height;
    this.alpha = 1;
    this.isObstacle = false;
}

const player = new GameObject('mario.png', 50, 50);
const obstacle = new GameObject('bomb.png', 60, 60);
//const flower = new GameObject('flower.png', 50, 50);
const objectArray = [];
const objectArray2 = [];

objectArray.push(player);

obstacle.x = Math.random() * 440;
obstacle.y = Math.random() * 440;
//flower.x = Math.random() * 440; 
//flower.y = Math.random() * 440;

setInterval(function(){
    const newObstacle = new GameObject('bomb.png', 60, 60);
    objectArray.push(newObstacle);
    newObstacle.isObstacle = true;

    newObstacle.x = Math.random() * 440;
    newObstacle.y = -newObstacle.height;

}, 1000);

/*setInterval(function(){
    const newObstacle2 = new GameObject('flower.png', 50, 50);
    objectArray2.push(newObstacle2);
    newObstacle2.isObstacle = true;

    newObstacle2.x = Math.random() * 440;
    newObstacle2.y = -newObstacle2.height;

}, 1897);*/

const downKeys = {};

window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);

function onKeyDown(event){
    downKeys[event.code] = true;
}

function onKeyUp(event){
    downKeys[event.code] = false;
}

function checkScore(){
    if(gameover == false){
        score = score + 1;
    }
}

function checkCollision(player, obstacle){
    return obstacle.x < player.x + player.width &&
    obstacle.x + obstacle.width > player.x &&
    obstacle.y < player.y + player.height &&
    obstacle.y + obstacle.height > player.y;
}

window.requestAnimationFrame(run);

let gameover = false;

function run(){

    if(gameover) return;

    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // background image
    context.drawImage(backgroundimage, 0, 0, 500, 500);

    //score
    setInterval(checkScore, 1000);

    context.font = '30px Arial';
    context.fillStyle = 'black';
    context.textBaseline = 'bottom';
    context.fillText(score, 10, 40);


    for(let obj of objectArray){
        
        context.globalAlpha = obj.alpha;
        
        context.drawImage(obj.image, obj.x, obj.y, obj.width, obj.height);

        if(obj === player) continue;

        if(obj.isObstacle){
            obj.y += 5;
        }

        if(checkCollision(player, obj)){
            context.font = '40px Arial';
            context.fillStyle = 'black';
            context.textBaseline = 'bottom';
            context.fillText('SCORE', 120, 255);
            context.fillText(score, 275, 255);

            gameover = true;
        }
        
    }

    for(let obj2 of objectArray2){
        context.globalAlpha = obj2.alpha;
        
        context.drawImage(obj2.image, obj2.x, obj2.y, obj2.width, obj2.height);

        if(obj2 === player) continue;

        if(obj2.isObstacle){
            obj2.y += 5;
        }

        for(let otherObj of objectArray2){
            if(checkCollision(player, otherObj)){
                
                otherObj.alpha = 0.5;
            }
        }

    }

    if(downKeys['ArrowLeft'])
        player.x -= 10;
    if(downKeys['ArrowRight'])
        player.x += 10;
    if(downKeys['ArrowUp'])
        player.y -= 10;
    if(downKeys['ArrowDown'])
        player.y += 10;
    if(player.x >= 500)
        player.x -= 500;
    if(player.x < 0)
        player.x += 500;    
    if(player.y >= 500)
        player.y -= 500;
    if(player.y < 0)
        player.y += 500;

    window.requestAnimationFrame(run);
}
