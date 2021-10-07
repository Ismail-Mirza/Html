const starting_minutes = .;
let time = starting_minutes*60;
const countdown = document.getElementById("countdown");
let interval  = 1000;

function updateCount(){
  const minutes = Math.floor(time/60);
  let sec = time%60;
  sec = sec < 10 ?"0"+sec:sec;
  countdown.innerHTML =minutes+":"+sec;
  time --;
  if (time == 0){
    interval = 0;
  }
}
setInterval(updateCount,interval);
