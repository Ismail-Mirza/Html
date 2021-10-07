// start function for connecting display with keyboard event
window.count_letter = 0;
window.right_letter = 0;
window.wrong_letter = 0;
var interval = 0;
function keyboard(key){
  if (interval==0){
    updateTime();
    interval+=1;
  }
  console.log(window.letter_in_display);
  num_li = window.letter_in_display.length
  element= document.getElementById(j.toString());
  // element_to_be_typed=document.getElementsByClassName(key.toString
  element_li=element.innerHTML
  window.count_letter += 1;
  console.log("charCode :" + key )
  if (key==13){
    key = 10;
  }
  console.log("I am enter : " +element_li.charCodeAt(element_li.length-1));
  if (element_li.charCodeAt(element_li.length -1)==8629){
    code_from_display = 10;
  }
  else{
    code_from_display = element_li.charCodeAt(element_li.length -1);
  }


  if( code_from_display == key ){
    element.style.backgroundColor = "green";
    // keyboard_EL.style.backgroundColor="green"
    window.keyboard_EL.style.backgroundColor="#fff";
    window.right_letter += 1;
    right = 1;
  }
  else{
    console.log("False");
    element.style.backgroundColor = "red";
    // keyboard_EL.style.backgroundColor="red";
    window.wrong_letter += 1;
    right = 0;
  }
  j += 1;
  if ( j < num_li){
    element_2nd= document.getElementById(j.toString())
    element_2nd.style.backgroundColor = "#3295DB";
    element_2nd.style.color="#FFEEF1";
    key_highlight(j);
  }

  if (j==num_li){
    str_li = "";
    exercise(letters);
    j = 0;
  }

}
// end connecting display with keyboard event function





// start utility function
// start find key
function find_key(arry,target){
  let low = 0;
  let high = arry.length-1;
  while(low<=high){
    let mid = Math.floor((high+low)/2);
    // console.log(arry[mid]);
    if (arry[mid]===target){
      return true;

    }
    else if(target<arry[mid]){
      high = mid-1;
    }
    else{
      low = mid+1;
    }
  }
  return false;
}
// console.log(find_key(right_shift,83));
// start show showSpeed
function showSpeed(time,letter){
  speed = Math.floor((letter*60)/(4*time));
  show_speed =document.getElementById("showSpeed");
  show_speed.innerHTML= speed+" <small>wpm</small>";
}
//end showspeed
// start updatecount
const starting_minutes = 1;
let time = starting_minutes*60-1;
const initial_time = time+1;
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
    clearInterval(window.timeOut);
    countdown.innerHTML = "0:00";

    override = document.getElementById("override");
    showSummary = document.getElementById("showSummary");
    showSummary.innerHTML="";
    html = "<h1> Type speed : "+Math.floor(window.count_letter/4) +" wpm </h1> "+ "<h1> Gross  speed : "+Math.floor((window.right_letter-window.wrong_letter)/4) +" wpm </h1> <h1> "+"Accuracy :"+Math.floor(window.right_letter*100/window.count_letter)+" % </h1>";
    override.innerHTML=html;

  }
}

// end updateCount


// end updatecount

// start otherkey highlight function
var previous_keycode=0;
function otherKey(key_code_of_keyboard){

  console.log("Other_KEY: "+key_code_of_keyboard);
  //return shift to intial state when number pressed
  //end return shift
  if (key_code_of_keyboard != 16){
    window.keyboard_EL = document.getElementById(key_code_of_keyboard.toString());
    // console.log(keyboard_EL);
    window.keyboard_EL.style.backgroundColor="red";

    if (previous_keycode != 0){
      pre_elemnt = document.getElementById(previous_keycode.toString());
      pre_elemnt.style.backgroundColor="#fff";
    }
    previous_keycode = key_code_of_keyboard;
  }
  // console.log("charCode : "+previous_keycode);

}
function updateTime(){
window.timeOut= setInterval(updateCount,1000);
}


// end other key highlight function

// start key to be highlight before key pressed
// start key_highlight()
var rpressed=true;
var lpressed=true;
window.prev_highlight_el=0;

function key_highlight(idx){

  console.log("I am previously highlighted by key_highlight function ="+window.prev_highlight_el);
  if (window.prev_highlight_el != 0){
    window.prev_highlight_el.style.backgroundColor="#fff";
  }
  right_shift = [33,35,36,37,64,65,66,67,68,69,70,71,81,82,83,84,86,87,88,90,94,126];

  left_shift = [34,40,41,42,43,58,60,62,63,72,73,74,75,76,77,78,79,80,85,89,95,123,124,125];
  key_to_be_highlight = window.letter_in_display[idx];
  key =key_to_be_highlight.charCodeAt(key_to_be_highlight.length-1);
  left_shift_highlight= document.getElementsByClassName("left-shift");
  right_shift_highlight=document.getElementsByClassName("right-shift");
  // shift returing to initial state
  if(rpressed===true){
    console.log("R shift return to intial state #fff");

    right_shift_highlight[0].style.backgroundColor="#fff";
    rpressed=false;

  }
  if (lpressed===true){
    console.log("L shift return to intial state #fff");
    left_shift_highlight[0].style.backgroundColor="#fff";
    lpressed=false;
  }


  if (find_key(right_shift,key)){
    right_shift_highlight[0].style.backgroundColor="#3295DB";
    rpressed=true;

  }
  if(find_key(left_shift,key)){
    left_shift_highlight[0].style.backgroundColor="#3295DB";
    lpressed=true;
  }

  highlight_el = document.getElementsByClassName(key.toString());
  highlight_el[0].style.backgroundColor="#3295DB";
  window.prev_highlight_el = highlight_el[0];
  // console.log(key);
}
// end key_highlight()


// end key to be highlight

// end utility

function  exercise(letters){
  window.letter_in_display = [];
  let ul_item = document.getElementById("ul_easy");
  var num_li = 6;
  str_li = ""
  for (let i = 0; i < num_li-1; i ++){
    idx=Math.floor(Math.random() * 2);
    j = i.toString()
    if (letters[idx]==" "){
        str_li += "<div "+ "id=\'"+j+"\'>"+ letters[idx]+"</div>"
    }
    str_li += "<div "+ "id=\'"+j+"\'>"+ letters[idx]+"</div>";
    window.letter_in_display.push(letters[idx]);
  }
  str_li += "<div "+ "id=\'"+"5"+"\'>"+ "↵"+"</div>";
  window.letter_in_display.push("\n");

  ul_item.innerHTML=str_li;
  element= document.getElementById('0')
  element.style.backgroundColor = "#3295DB";
  element.style.color="#FFEEF1";
  key_highlight(0);
}
