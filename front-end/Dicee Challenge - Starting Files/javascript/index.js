let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let newImg1 = "./images/dice" + randomNumber1 +".png";
let newImg2 = "./images/dice" + randomNumber2 +".png";

document.querySelector(".img1").setAttribute("src", newImg1);
document.querySelector(".img2").setAttribute("src", newImg2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "&#128681Player 1 Wins!";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!&#128681";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}