ul_item = document.getElementById("ul_easy")
letters=['u','j']

str_li = ""

var num_li = 6;
function  exercise(){
  for (let i = 0; i < num_li; i ++){
    idx=Math.floor(Math.random() * 2);
    j = i.toString()+''
    str_li += "<li "+ "id=\'"+j+"\'>"+ letters[idx]+"</li>"
  }

  ul_item.innerHTML=str_li;
  element= document.getElementById('0')
  element.style.backgroundColor = "#3295DB";
  element.style.color="#FFEEF1";
}
exercise();



var count_letter = 0;
var right_letter = 0;
var wrong_letter = 0;
var previous_keycode=0;

window.addEventListener('keypress',keyboard,false);
var j = 0;
function keyboard(event){

  var key = event.which;
  element= document.getElementById(j.toString())
  element_li=element.innerHTML
  count_letter += 1;
  // console.log("charCode" + key )
  if( element_li.charCodeAt(element_li.length -1) == key){
    element.style.backgroundColor = "green";
    // keyboard_EL.style.backgroundColor="green"
    window.keyboard_EL.style.backgroundColor="green";
    right_letter += 1;
  }
  else{
    console.log("False");
    element.style.backgroundColor = "red";
    // keyboard_EL.style.backgroundColor="red";
    wrong_letter += 1;
  }
  j += 1;
  if ( j < num_li){
    element_2nd= document.getElementById(j.toString())
    element_2nd.style.backgroundColor = "#3295DB";
    element_2nd.style.color="#FFEEF1";
  }

  if (j==num_li){
    str_li = "";
    exercise();
    j = 0;

  }

}
window.addEventListener('keydown',otherKey,false);
function otherKey(event){
  var key_code_of_keyboard = event.which;
  window.keyboard_EL = document.getElementById(key_code_of_keyboard.toString());
  // console.log(keyboard_EL);
  window.keyboard_EL.style.backgroundColor="red";


  if (previous_keycode != 0){
    pre_elemnt = document.getElementById(previous_keycode.toString());
    pre_elemnt.style.backgroundColor="#fff";
  }
  previous_keycode = key_code_of_keyboard;
  console.log("Other_KEY: "+key_code_of_keyboard);

}
const starting_minutes = 1;
let time = starting_minutes*60;
const initial_time = time;

let interval  = 1000;
var timeOut= setInterval( updateCount,1000);


function updateCount(){
  const minutes = Math.floor(time/60);
  let sec = time%60;

  sec = sec < 10 ?"0"+sec:sec;
  const countdown = document.getElementById("countdown");
  countdown.innerHTML =minutes+":"+sec;
  time --;
  var wasted_time = initial_time - time;
  showSpeed(wasted_time,count_letter);
  if (time == 0){
    clearInterval(timeOut);
    countdown.innerHTML = "0:00";

    override = document.getElementById("override");
    showSummary = document.getElementById("showSummary");
    showSummary.innerHTML="";
    html = "<h1> Type speed : "+Math.floor(count_letter/4) +" wpm </h1> "+ "<h1> Gross  speed : "+Math.floor((right_letter-wrong_letter)/4) +" wpm </h1> <h1> "+"Accuracy :"+Math.floor(right_letter*100/count_letter)+" % </h1>";
    override.innerHTML=html;

  }
}
// start show showSpeed
function showSpeed(time,letter){
  speed = Math.floor((letter*60)/(4*time));
  show_speed =document.getElementById("showSpeed");
  show_speed.innerHTML= speed+" <small>wpm</small>";
}
