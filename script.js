var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var milisec = document.getElementById("msec")

var hrs = 0;
var min = 0;
var sec = 0;
var msec = 0;

function start() {

    msec++

    if(msec==100){
        msec=0
        sec++
    }
    if(msec<10){
        milisec.innerHTML = '0'+msec
    }
    if(msec>=10){
        milisec.innerHTML = msec;
    }

    if(sec==60){
        sec=0
        min++
    }
    if(sec<10){
        seconds.innerHTML = '0'+sec
    }
    if(sec>=10){
        seconds.innerHTML = sec
    }

    if(min==60){
        min=0
        hrs++
    }
    if(min<10){
        minutes.innerHTML = '0'+min
    }
    if(min>=10){
        minutes.innerHTML = min
    }

    if(hrs<10){
        hours.innerHTML = '0'+hrs
    }
    if(hrs>=10){
        hours.innerHTML = hrs
    }
}

var startbtn = document.getElementById("start")
var resetbtn = document.getElementById("reset")

var count = 0;
var interval

startbtn.addEventListener('click',()=>{
    count++
    if( count % 2 == 1 ) {
        interval = setInterval(start,10)
        startbtn.innerHTML = "Stop"
    }
    if( count % 2 == 0 ) {
        clearInterval(interval)
        startbtn.innerHTML = "Start"
    }
})

resetbtn.addEventListener('click',()=>{

    clearInterval(interval)
    hrs = 0
    min = 0
    sec = 0
    msec = 0
    count = 0

    hours.innerHTML = "00"
    minutes.innerHTML = "00"
    seconds.innerHTML = "00"
    milisec.innerHTML = "00"

    startbtn.innerHTML = "Start"
})