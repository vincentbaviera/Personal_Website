var img = new Image();
var canvas = document.getElementById('anim');
var ctx = canvas.getContext('2d');

//logique de frame pour récup la bonne image
//on donne la taille d'une frame:
var frameWidth = canvas.width;
//ou 940. a changer
// si le canvas est plus grand que la taille de l'image
var frameHeight = canvas.height; //ou 240
//initialisation des frames
var frameX = 0;
var frameY = 0;
//calcul du nombre de frame:
var numFrameX = 0;
var numFrameY = 0;


img.onload = function(){
//charger l'image en premier afin d'etre sur de pouvoir la manipuler
console.log('loaded');

	//pour avoir le nombre de frame en largeur
	numFrameX = img.width/frameWidth;
	console.log(numFrameX);
	//pour avoir le nombre de frame en hauteur
	numFrameY = img.height/frameHeight;
	console.log(numFrameY);

	//dessiner l'image quand elle est chargée
	ctx.drawImage(img,0,0);

	start();

};

img.src = 'img/intro/intro000.jpg';

function start() {
	setInterval(renderFrame, 50);
};


function renderFrame() {
	if (frameX == numFrameX) {
		frameX = 0;
		frameY++;

		if (frameY == numFrameY){
			frameY = 0;
		}
	}
	console.log(frameX);
	//on nettoie le canvas pour ne pas avoir les frames les unes sur les autres
	ctx.clearRect(0,0,canvas.width, canvas.height);
	//animation du dessin, passage de frames.
	ctx.drawImage(
		img,
		frameX * frameWidth,
		frameY * frameHeight,
		frameWidth,
		frameHeight,
		0,
		0,
		frameWidth,
		frameHeight
		);

	frameX++;
};
