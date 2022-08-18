document.querySelector("button").addEventListener("click",DiceGAme);

var audio1=new Audio("Audio/dicgameaudio.mpeg");
audio1.play();
function DiceGAme(){
var randomNumber1=Math.floor((Math.random()*6)+1);
var randomNumber2=Math.floor((Math.random()*6)+1);
console.log(randomNumber1+" "+randomNumber2);
var randomDiceImage="dice"+randomNumber1+".jpeg";
var diceSource=  randomDiceImage;
console.log(diceSource);
var diceSource2="dice"+ randomNumber2+ ".jpeg";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", diceSource);
var image2= document.querySelectorAll('img')[1];
image2.setAttribute("src", diceSource2);
var audio=new Audio("Audio/RollDice.mp3");
audio.play("");
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Win";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Win ";
}
else{
    document.querySelector("h1").innerHTML="DRAW";
}
}

