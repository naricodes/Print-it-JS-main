const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Création et affichage des bullet points//

const classDot = document.querySelector(".dots");

for (let i = 0; i < slides.length; i ++) {
	const dot = document.createElement("div");
	classDot.appendChild(dot);
	dot.classList.add("dot");
}


// Récupération de la position et affichage du bullet point 

let position = 0;
let selectedDot = recuperationPosition();
selectedDot.classList.add("dot_selected");


// Ajout des évènements sur les flèches

const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");

arrowRight.addEventListener("click", function() {
	clicSurFleche(1);
});
arrowLeft.addEventListener("click", function() {
	clicSurFleche(-1);
});



// FONCTIONS

function recuperationPosition() {
	return document.querySelector(`.dots .dot:nth-child(${position + 1}`);
}

function clicSurFleche(direction) {
	position = position + direction;
	testPosition();
	changementBulletPoint();
	changementImage();
}

function testPosition() {
	if (position >= slides.length) {
		position = 0;
	}
	else if (position < 0) {
		position = slides.length - 1;
	}
}

function changementBulletPoint() {
	selectedDot.classList.remove("dot_selected");
	selectedDot = recuperationPosition();
	selectedDot.classList.add("dot_selected");
}

function changementImage() {
	document.querySelector(".banner-img").src = "./assets/images/slideshow/" + slides[position].image;
	document.querySelector("#banner p").innerHTML = slides[position].tagLine;
}