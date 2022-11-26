// alert("Welcome");
var randomNumber1;
randomNumber1=Math.floor(Math.random()*6+1);

var randomDiceImage = "images/dice" + randomNumber1 + ".png"; // dice1.png to dice6.png

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImage);

var randomNumber2;
randomNumber2=Math.floor(Math.random()*6+1);

var randomDiceimage2 = "images/dice" + randomNumber2 + ".png";

var image2= document.querySelectorAll(".img2")[0].setAttribute("src",randomDiceimage2);

 if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "You win 🚩 ";
 }
 else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML= "Computer wins 🚩 ";
 }
 else{
    document.querySelector("h1").innerHTML= " Draw 🎌 "
 }