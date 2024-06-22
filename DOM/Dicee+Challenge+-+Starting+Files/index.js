function randomNumber(){
    var n = Math.random();
    n= n*6;
    n= Math.floor(n);
    n=n+1;
    
    return n;
}


function setDiceImages(){

    var randomNumber1= randomNumber();
    var randomNumber2= randomNumber();

    var image1=document.getElementsByClassName("img1")[0];
    var image2= document.getElementsByClassName("img2")[0];

    image1.setAttribute("src","images/dice"+randomNumber1+".png");
    image2.setAttribute("src","images/dice"+randomNumber2+".png");

    Winner(randomNumber1, randomNumber2);
}

function Winner(randomNumber1, randomNumber2) {
    var titlechange = document.querySelector(".container h1");
    if (randomNumber1 > randomNumber2) {
        titlechange.innerHTML = "Player 1 Wins";
    } else if (randomNumber1 < randomNumber2) {
        titlechange.innerHTML = "Player 2 Wins";
    } else {
        titlechange.innerHTML = "It's a Tie";
    }
}

window.onload = setDiceImages();