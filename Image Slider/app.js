const slider = document.querySelector(".slider");
const before = document.querySelector(".img-container-before");
const after = document.querySelector(".img-container-after");
const container = document.querySelector(".container");
const drag = (e) => {
	let xCor = e.layerX;
	let size = container.offsetWidth;
	before.style.width = xCor + "px";
	slider.style.left = xCor + "px";
	if (xCor < 50) {
		before.style.width = 0;
		slider.style.left = 0;
	}
	if (xCor + 50 > size) {
		before.style.width = size + "px";
		slider.style.left = size + "px";
	}
};

container.addEventListener("mousemove", drag);
