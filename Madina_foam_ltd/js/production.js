//select all buttton
const nextBtn = document.querySelector("#nextBtn");
const backBtn = document.querySelector("#backBtn");
//select all dom div
const details = document.querySelector("#details");
const materials = document.querySelector("#materials");

// all helper function
const showDetail = (e) => {
	materials.style.zIndex = "0";
	details.style.zIndex = "1";
};
const back = (e) => {
	materials.style.zIndex = "1";
	details.style.zIndex = "0";
};
//alll event listeners
//nextBtn
nextBtn.addEventListener("click", showDetail);
//backBtn

backBtn.addEventListener("click", back);
