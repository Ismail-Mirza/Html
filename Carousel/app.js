const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide>img");
console.log(carouselImages);
//buttons
const prevButton = document.querySelector("#prevBtn");
const nextButton = document.querySelector("#nextBtn");
//counter
let counter = 1;
const size = carouselImages[0].clientWidth;
//show 1st image instead of lastClone
carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
//buttons listerner

nextButton.addEventListener("click", () => {
	if (counter >= carouselImages.length - 1) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter++;
	carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});
prevButton.addEventListener("click", () => {
	if (counter <= 0) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter--;
	carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});
carouselSlide.addEventListener("transitionend", () => {
	if (carouselImages[counter].id == "lastClone") {
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - 2;
		carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
	}
	if (carouselImages[counter].id == "firstClone") {
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - counter;
		carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
	}
});
