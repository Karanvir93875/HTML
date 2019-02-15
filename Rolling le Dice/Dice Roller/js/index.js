var randomNumber = Math.floor(Math.random() * 6) + 1; //0-6  
var playerOneImages = "images/die" + randomNumber+".png";
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //0-6  
var playerOneImages1 = "images/die" + randomNumber1+".png";


document.querySelector('.img1').setAttribute('src', playerOneImages);
document.querySelector('.img2').setAttribute('src', playerOneImages1);

if(playerOneImages > playerOneImages1) {
	document.querySelector('h1').innerHTML = "Player 1 Win";
} else if (playerOneImages < playerOneImages1) {
	document.querySelector('h1').innerHTML = "Player 2 Win";
} 	else {
		document.querySelector('h1').innerHTML = "Roll again";
}