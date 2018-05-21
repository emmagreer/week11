/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/

//declaring variables for puck
var puck_x = 210;
var puck_y = 210;
var speed = 50
var puck = document.getElementById('puck');
var gap = document.getElementById('gap');

function logCoordinates(){
    console.log('x=' + puck_x + 'y=' + puck_y)
}

function checkCollision(){
    if (puck_x >= 250 && puck_x <= 350){
        gap.style.backgroundColor = 'red';
    }
    else{
        gap.style.backgroundColor = "white";
    }
}

document.getElementById('puck').style.top = puck_y + 'px';
document.getElementById('puck').style.left = puck_x + 'px';

//move left
document.getElementById('left').addEventListener('click', function(){
    puck_x -= speed;
    document.getElementById('puck').style.left = puck_x + 'px';
    console.log('x=' + puck_x + 'y=' + puck_y)
    checkCollision();
});

//move right
document.getElementById('right').addEventListener('click', function(){
    puck_x += speed;
    document.getElementById('puck').style.left = puck_x + 'px';
    console.log('x=' + puck_x + 'y=' + puck_y)
    checkCollision();
});
//move up
document.getElementById('up').addEventListener('click', function(){
    puck_y -= speed;
    document.getElementById('puck').style.top = puck_y + 'px';
    console.log('x=' + puck_x + 'y=' + puck_y)
    checkCollision();
});
//move down
document.getElementById('down').addEventListener('click', function(){
    puck_y += speed;
    document.getElementById('puck').style.top = puck_y + 'px';
    console.log('x=' + puck_x + 'y=' + puck_y)
    checkCollision();
});
