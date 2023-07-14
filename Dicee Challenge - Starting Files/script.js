var randNo1=(Math.floor(Math.random()*6))+1;
var randNo2=(Math.floor(Math.random()*6))+1;
var randomDiceImage1= "images/dice" +randNo1+ ".png" ;
var randomDiceImage2= "images/dice" +randNo2+ ".png" ;
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
image1.setAttribute("src",randomDiceImage1);
image2.setAttribute("src",randomDiceImage2);
if(randNo1>randNo2){
    document.querySelector(".container .winner>p").textContent="Player 1 wins! 🎲";
}else if(randNo1==randNo2){
    document.querySelector(".container .winner>p").textContent="It is a tie. 🎲";
}else{
    document.querySelector(".container .winner>p").textContent="Player 2 wins! 🎲";
}