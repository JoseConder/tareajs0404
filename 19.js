const prompt = require('prompt-sync')();

function clock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  console.log(hours + ":" + minutes + ":" + seconds);
}


function otherClock(hours, minutes, seconds){
  let date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(seconds);
  setInterval(function() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
        if (hours >= 24) {
          hours = 0;
        }
      }
    }
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(seconds);
    console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
  }, 1000);
}

let resp = prompt("Deseas ajustar el reloj? (y/n)")
if(resp === "y" || resp === "Y"){
  let hours = parseInt(prompt("Ingrese la hora (0-23)"));
  let minutes = parseInt(prompt("Ingrese los minutos (0-59)"));
  let seconds = parseInt(prompt("Ingrese los segundos (0-59)"));
  otherClock(hours, minutes, seconds);
} else {
  setInterval(clock, 1000);
}
