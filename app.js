function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
};

function showTime() {
    let date = new Date();
    let hours = date.getHours();//0-23
    let minutes = date.getMinutes();//0-59
    let seconds = date.getSeconds();//0-59

    let formatHours = convertFormat(hours)
    hours = checkTime(hours);
document.getElementById('clock').innerHTML=`${hours}: ${minutes} : ${seconds} ${formatHours}`


}

function convertFormat(time) {
    let format = 'AM'
    if (time >= 12) {
        format = 'PM'
        var element = document.getElementsByTagName("body");
    element.classList.add("dark-mode");
    }
    return format;
}

function checkTime(time) {
    if (time > 12) {
        time = time - 12;
    }

    if (time ===0 ){
        time = 12;
    }
    return time; 
}

showTime();
setInterval(showTime,1000);