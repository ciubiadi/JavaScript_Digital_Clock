
let choice = window.prompt("Write \"clasic\" or \"smooth\"");

const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

if(choice=="smooth") {



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

  function runTheClock() {

    //We grab the existing hour position. It moves the distance of 1 hour so it will be (360deg/12)/3600seconds
    hourPosition = hourPosition+(3/360);

  //We calculate the position of the minutes. It will be minPosition+(1/60)*6
    minPosition = minPosition+(6/60);

    secPosition = secPosition+6;

    HOURHAND.style.transform = "rotate(" + hourPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

  }

  var interval = setInterval(runTheClock, 1000);

} else if(choice=="clasic") {

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

  document.querySelector('#hour').style.transition = "none";
  document.querySelector('#minute').style.transition = "none";
  document.querySelector('#second').style.transition = "none";

}
