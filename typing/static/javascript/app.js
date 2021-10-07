

window.letters = ["j","f"];
exercise(window.letters);
var j = 0;
window.addEventListener('keypress',function(event){
  var key = event.charCode;
  keyboard(key);
},false);

// end keyboard function
window.addEventListener('keydown',function(event){
  var key_code_of_keyboard = event.which;
  otherKey(key_code_of_keyboard);
},false);
