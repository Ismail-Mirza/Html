const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
function randInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
sign_up_btn.addEventListener("click", () => {
	container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
	container.classList.remove("sign-up-mode");
});
var log_images = ["img/log_2.svg", "img/sec_log.svg", "img/log.svg"];
console.log(log_images);
setInterval(function () {
	var log_img = document.querySelector("#log-img");
	const idx = randInt(0, log_images.length);
	log_img.setAttribute("src", log_images[idx]);
}, 10000);

var reg_svgs = [
	"img/register_say.svg",
	"img/register_code.svg",
	"img/register.svg",
];

setInterval(function () {
	var reg_svg = document.querySelector("#reg-svg");
	const idx = randInt(0, reg_svgs.length);

	reg_svg.setAttribute("src", reg_svgs[idx]);
}, 10000);

//init on dom load
document.addEventListener("DOMContentLoaded", init);
//init app
function init() {
	const txtElement = document.querySelector(".txt-type");
	// console.log(txtElement);
	const words = JSON.parse(txtElement.getAttribute("data-words"));
	const wait = txtElement.getAttribute("data-wait");
	//init TypeWriter
	new TypeWriter(txtElement, words, wait);
}
//init on dom load
