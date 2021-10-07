// window.addEventListener("scroll",function(event){
//     console.log("Scrolling happend")
// })

function openNav(caller) {
	caller.setAttribute("hidden", "true");
	document.getElementById("mySidenav").style.width = "450px";
	document.getElementById("main").style.marginLeft = "450px";
	document.getElementById("main").style.paddingLeft = "15px";

	nav_bar.style.marginLeft = "450px";
}
function closeNav() {
	document.querySelector("#addnew").removeAttribute("hidden");
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "50px";
	document.getElementById("main").style.paddingLeft = "0";
	nav_bar.style.marginLeft = "0";
	document.body.style.backgroundColor = "white";
}
