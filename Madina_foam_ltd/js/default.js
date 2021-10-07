var isScrolling;
const nav_bars = document.querySelectorAll(".navbar-light");
// Listen for scroll events
window.addEventListener(
	"scroll",
	function (event) {
		// Clear our timeout throughout the scroll
		for (nav_bar of nav_bars) {
			nav_bar.classList.remove("bg-light");
			nav_bar.classList.add("nav__back");
		}
		window.clearTimeout(isScrolling);

		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(function () {
			// Run the callback
			for (nav_bar of nav_bars) {
				nav_bar.classList.add("bg-light");
				nav_bar.classList.remove("nav__back");
			}
			console.log("Scrolling has stopped.");
		}, 200);
	},
	false
);
