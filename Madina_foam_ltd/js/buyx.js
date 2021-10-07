function openNav(caller) {
	caller.setAttribute("hidden", "true");
	document.getElementById("mySidenav").style.width = `${window.innerWidth}px`;
	document.getElementById("main").style.paddingLeft = "15px";
}
function closeNav() {
	document.querySelector("#addnew").removeAttribute("hidden");
	document.getElementById("mySidenav").style.width = "0";
	document.body.style.backgroundColor = "white";
}
