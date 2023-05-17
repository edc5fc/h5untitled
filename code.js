
//using arrow keys to move player 
document.getElementById('player-image').style.position = "absolute";
playerMovementSpeed = 5;
document.onkeydown = detectKey;
function detectKey(e) {
    var posLeft = document.getElementById('player-image').offsetLeft;
    var posTop = document.getElementById('player-image').offsetTop;
    e = e || window.event;

    console.log(e.keyCode)
    if (e.keyCode == '38') {
        // up arrow
        document.getElementById('player-image').style.top  = (posTop-playerMovementSpeed)+"px";
    }
    else if (e.keyCode == '40') {
        // down arrow
        document.getElementById('player-image').style.top  = (posTop+playerMovementSpeed)+"px";
    }
    else if (e.keyCode == '37') {
       // left arrow
        document.getElementById('player-image').style.left  = (posLeft-playerMovementSpeed)+"px";
    }
    else if (e.keyCode == '39') {
       // right arrow
        document.getElementById('player-image').style.left  = (posLeft+playerMovementSpeed)+"px";
    }
    console.log(playerMovementSpeed, document.getElementById('player-image').style.top, document.getElementById('player-image').style.left)
}
function displayCharacterSpeech(speech){
    let displaySpeech = '';
    const displaySpeechArray = [];
    
    for(let i = 0; i < speech.length; i++){
        displaySpeech = displaySpeech.concat(speech[i]);
        displaySpeechArray.push(displaySpeech);
        setTimeout (() => {
            document.getElementById('speechbox').innerHTML = displaySpeechArray[i];
        }, i * 75); 
    
}



   
}
displayCharacterSpeech("~print out da message dude, this is for testing :)")