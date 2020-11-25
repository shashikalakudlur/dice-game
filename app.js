var randomnumber1 = Math.floor(Math.random() * 7); // 1-6

var randomDiceimage = "dice" + randomnumber1 + ".png"; // dice1-dice6

var randomImageSource = "images/" + randomDiceimage; // images/dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomnumber2 = Math.floor(Math.random() * 7);

var randomImageSource2 = "images/dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomnumber1 > randomnumber2) {

    document.querySelector("h1").innerHTML = "🏁player 1 win!";

} else if (randomnumber2 > randomnumber1) {

    document.querySelector("h1").innerHTML = "player 2 win!🏁";
} else {
    document.querySelector("h1").innerHTML = "draw!";
}