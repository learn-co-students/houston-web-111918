// var, let
const startTime = function() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var element = document.getElementById('txt')
    element.innerHTML = `Hello, it is ${h}:${m}:${s}`;
    setTimeout(startTime, 500);
}

startTime()

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };  // add zero in front of numbers < 10
    return i;
}
