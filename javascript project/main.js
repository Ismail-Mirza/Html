
document.getElementById("colorBtn").addEventListener("click",function(){
  const colors = ['yellow','red','green','blue'];
  var random = Math.floor(Math.random()*colors.length);
  var element = document.getElementById("body");
   element.style.backgroundColor=colors[random];
});
console.log("hello html");
