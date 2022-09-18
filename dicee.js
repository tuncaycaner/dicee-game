var player1 = "Player 1";
var player2 = "Player 2";
var dice1 = "images/dice1.png";
var dice2 = "images/dice2.png";
var dice3 = "images/dice3.png";
var dice4 = "images/dice4.png";
var dice5 = "images/dice5.png";
var dice6 = "images/dice6.png";
var random1 = randomizeDice1();
var random2 = randomizeDice2();



main();


function main() {
    randomizeDice1();
    randomizeDice2();
    if (random1 > random2) {
        document.querySelector("h1").innerHTML = "<i class='fa-solid fa-flag'></i> Player 1 wins!";
    }
    else if (random1 == random2) {
        document.querySelector("h1").innerHTML = "Draw!";
    }
    else if (random1 < random2) {
        document.querySelector("h1").innerHTML = "Player 2 wins! <i class='fa-solid fa-flag'></i>";
}

    changeDice1();
    changeDice2();
}




function randomizeDice1 () {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    return(randomNumber1);
    
}

function randomizeDice2 () {
    var randomNumber2 = Math.floor(Math.random() * 6 + 1);
    return(randomNumber2)
}





function changeDice1 () {
    if (random1 == 1) {
        document.querySelector("div .img1").setAttribute("src", "images/dice1.png");
    }
    else if (random1 == 2) {
        document.querySelector("div .img1").setAttribute("src", "images/dice2.png");
    }
    else if (random1 == 3) {
        document.querySelector("div .img1").setAttribute("src", "images/dice3.png");
    }
    else if (random1 == 4) {
        document.querySelector("div .img1").setAttribute("src", "images/dice4.png");
    }
    else if (random1 == 5) {
        document.querySelector("div .img1").setAttribute("src", "images/dice5.png");
    }
    else if (random1 == 6){
        document.querySelector("div .img1").setAttribute("src", "images/dice6.png");
    }
}

function changeDice2 () {
    if (random2 == 1) {
        document.querySelector("div .img2").setAttribute("src", "images/dice1.png");
    }
    else if (random2 == 2) {
        document.querySelector("div .img2").setAttribute("src", "images/dice2.png");
    }
    else if (random2 == 3) {
        document.querySelector("div .img2").setAttribute("src", "images/dice3.png");
    }
    else if (random2 == 4) {
        document.querySelector("div .img2").setAttribute("src", "images/dice4.png");
    }
    else if (random2 == 5) {
        document.querySelector("div .img2").setAttribute("src", "images/dice5.png");
    }
    else if (random2 == 6) {
        document.querySelector("div .img2").setAttribute("src", "images/dice6.png");
    }
}
