//  12 hour = 360deg
//  1 hour = 360/12=30
//  h hours = 30h+m/2

//  60min = 30
//  1 min = 30/60 = 1/2
//  m mins = m/2

//  60 min = 360deg
//  1 min = 6deg
//  m min = 6m

//  60 sec = 360deg
//  1 sec = 6deg
//  s sec = 6s

let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
function displayTime(){
    let date = new Date();


    let hh = date.getHours();
    let mn = date.getMinutes();
    let sc = date.getSeconds();

    let hrotate = 30*hh + mn/2;
    let mrotate = 6*mn;
    let srotate = 6*sc;

    hr.style.transform = `rotate(${hrotate}deg)`;
    min.style.transform = `rotate(${mrotate}deg)`;
    sec.style.transform = `rotate(${srotate}deg)`;
}
setInterval(displayTime,1000);