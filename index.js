//choose p1 dicee
var randomNumber1=Math.floor(Math.random()*6)+1;//random number between 1-6.
var randomImage="images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage);

//choose p2 dicee
var randomNumber2=Math.floor(Math.random()*6)+1;//random number between 1-6.
var randomImage="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll( "img" )[1];
image2.setAttribute("src", randomImage);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else if(randomNumber2===randomNumber1){
    document.querySelector("h1").innerHTML="Equal Dicee";
}
