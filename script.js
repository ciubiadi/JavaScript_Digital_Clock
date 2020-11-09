const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");



function runTheClock() {

  var date = new Date();

  // Getting the real time
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  // converting the real seconds, minutes and hours into degrees
  let hourPosition = (hr*360/12)+(min*(360/60)/12);

  // The basic method will be min*360/60, but we want to make a smooth transition so we will add the seconds
  let minPosition = (min*360/60)+(sec*(360/60)/60);

  let secPosition = sec*360/60;

  HOURHAND.style.transform = "rotate(" + hourPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(runTheClock, 1000);
