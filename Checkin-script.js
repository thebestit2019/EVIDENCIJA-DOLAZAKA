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
