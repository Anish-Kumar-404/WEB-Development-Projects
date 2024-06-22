// var noOfButtons= document.querySelectorAll(".drum").length;

document.addEventListener("keydown", function(event) {
    switch (event.key.toLowerCase()) {
        case "a":
            tom1();
            break;
        case "s":
            tom2();
            break;
        case "d":
            tom3();
            break;
        case "f":
            tom4();
            break;
        case "j":
            crash();
            break;
        case "k":
            kickbass();
            break;
        case "l":
            snare();
            break;
        default:
            console.log("Invalid key pressed");
    }
});


function tom1(){
    var audio = new Audio('./sounds/tom-1.mp3');
    audio.play();
}

function tom2(){
    var audio = new Audio('./sounds/tom-2.mp3');
    audio.play();
}
function tom3(){
    var audio = new Audio('./sounds/tom-3.mp3');
    audio.play();
}
function tom4(){
    var audio = new Audio('./sounds/tom-4.mp3');
    audio.play();
}
function crash(){
    var audio = new Audio('./sounds/crash.mp3');
    audio.play();
}
function kickbass(){
    var audio = new Audio('./sounds/kick-bass.mp3');
    audio.play();
}
function snare(){
    var audio = new Audio('./sounds/snare.mp3');
    audio.play();
}

