
//using arrow keys to move player 
//FIXME (left arrow doesn't work, and also sometimes the up arrow)
playerMovementSpeed = 5;
document.onkeydown = detectKey;
function detectKey(e) {
    var posLeft = document.getElementById('player-image').offsetLeft;
    var posTop = document.getElementById('player-image').offsetTop;
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        document.getElementById('player-image').style.marginTop  = (posTop-playerMovementSpeed)+"px";
    }
    else if (e.keyCode == '40') {
        // down arrow
        document.getElementById('player-image').style.marginTop  = (posTop+playerMovementSpeed)+"px";
    }
    else if (e.keyCode == '37') {
       // left arrow
        document.getElementById('player-image').style.marginLeft  = (posLeft-playerMovementSpeed)+"px";
    }
    else if (e.keyCode == '39') {
       // right arrow
        document.getElementById('player-image').style.marginLeft  = (posLeft+playerMovementSpeed)+"px";
    }
    console.log(playerMovementSpeed, document.getElementById('player-image').style.marginTop, document.getElementById('player-image').style.marginLeft)
}