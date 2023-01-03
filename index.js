var numberChange = Math.floor(Math.random() * 6) + 1;
var srcText = "images/dice" + numberChange + ".png";
document.querySelector(".img1").setAttribute("src" , srcText );

var numberChange1 = Math.floor(Math.random() * 6) + 1;
var srcText1 = "images/dice" + numberChange1 + ".png";
document.querySelector(".img2").setAttribute("src" , srcText1 );

if(numberChange > numberChange1){
    document.querySelector("h1").innerHTML="💥player1 win";

}
else if(numberChange === numberChange1 ){
    document.querySelector("h1").innerHTML="draw";

}
else{
    document.querySelector("h1").innerHTML="💥player2 win";

}

