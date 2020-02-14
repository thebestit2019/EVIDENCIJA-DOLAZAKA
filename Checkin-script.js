let date = document.getElementById("date");
let dateObj = new Date();
let dd = dateObj.getDate();
let mm = dateObj.getMonth() + 1;
let yyyy = dateObj.getFullYear();

if (mm < 10) {
    mm = '0' + mm
}

date.value = dd + '.' + mm + '.' + yyyy;

function startTime() {
    timeObj = new Date();
    let hour = timeObj.getHours();
    let min = timeObj.getMinutes();
    let sec = timeObj.getSeconds();
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById('time').value = hour + ":" + min + ":" + sec;
    let t = setTimeout(startTime, 500);
}
function checkTime(i) {
if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

let display = document.getElementById("display");
let PIN = '';

document.getElementById("btn1").addEventListener("click", function () {
    input(document.getElementById("btn1").value)
});

document.getElementById("btn2").addEventListener("click", function () {
    input(document.getElementById("btn2").value)
});

document.getElementById("btn3").addEventListener("click", function () {
    input(document.getElementById("btn3").value)
});

document.getElementById("btn4").addEventListener("click", function () {
    input(document.getElementById("btn4").value)
});

document.getElementById("btn5").addEventListener("click", function () {
    input(document.getElementById("btn5").value)
});

document.getElementById("btn6").addEventListener("click", function () {
    input(document.getElementById("btn6").value)
});

document.getElementById("btn7").addEventListener("click", function () {
    input(document.getElementById("btn7").value)
});

document.getElementById("btn8").addEventListener("click", function () {
    input(document.getElementById("btn8").value)
});

document.getElementById("btn9").addEventListener("click", function () {
    input(document.getElementById("btn9").value)
});

document.getElementById("btn0").addEventListener("click", function () {
    input(document.getElementById("btn0").value)
});

function input(value){
    display.value += value;
    PIN += value;
    console.log("PIN " + PIN);
    
}

document.getElementById("reset").addEventListener("click", reset);

function reset(){
    display.value = '';
    PIN = '';
    console.log("PIN " + PIN);
}
  
