const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const image1 = new Image();
image1.src =
	"https://image.ceneostatic.pl/data/products/86604064/i-rick-i-morty-porabana-sztuka.jpg";
image1.onload = function initialize() {
	canvas.width = image1.width;
	canvas.height = image1.height;
	ctx.drawImage(image1, 0, 0);
};

class AsciiEffect {
	// private encapsulation
	#imageCellArray = [];
	#symbols = [];
	#pixels = [];
	#ctx;
	#width;
	#height;
}
