window.onload = function(){
    var interval = setInterval(clock, 1000);
}

function clock(){
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var seconds = today.getSeconds();
    if(seconds < 10){
        seconds = "0"+seconds;
    }
    if(minute < 10){
        minute = "0"+minute;
    }
    if(hour < 10){
        hour = "0"+hour;
    }
    document.getElementById("time").innerHTML = hour+":"+minute+":"+seconds;
}