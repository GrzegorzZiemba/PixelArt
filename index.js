const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const image1 = new Image();
image1.src = "img.jpg";

class AsciiEffect {
	// private encapsulation
	#imageCellArray = [];
	#symbols = [];
	#pixels = [];
	#ctx;
	#width;
	#height;
	constructor(ctx, width, height) {
		this.#ctx = ctx;
		this.#width = width;
		this.#height = height;
		this.#ctx.drawImage(image1, 0, 0, this.#width, this.#height);
		this.#pixels = this.#ctx.getImageData(0, 0, this.#width, this.#height);
		console.log(this.#pixels.data);
	}
	#scanImage(cellSize) {
		this.#imageCellArray = [];
		for (let y = 0; y < this.#pixels.height; y += cellSize) {
			for (let x = 0; x < this.#pixels.width; x += cellSize) {
				const posX = x * 4;
				const posY = y + 4;
				const pos = posY * this.#pixels.width + posX;
				if (this.#pixels.data[pos + 3] > 128) {
					const red = this.#pixels.data[pos];
					const green = this.#pixels.data[pos + 1];
					const blue = this.#pixels.data[pos + 2];
					const total = red + green + blue;
					const avarageColorValue = total / 3;
					const color = `${avarageColorValue}`;
				}
			}
		}
	}
}

let effect;
image1.onload = function initialize() {
	canvas.width = image1.width;
	canvas.height = image1.height;
	effect = new AsciiEffect(ctx, image1.width, image1.height);
};
