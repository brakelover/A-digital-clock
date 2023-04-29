const hourEle = document.getElementById("hour");
const minuteEle = document.getElementById("minute");
const secondEle = document.getElementById("second");
const ampmEle = document.getElementById("ampm");

function clock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    } 

    h = h < 10 ? "0"+ h : h;
    m = m < 10 ? "0"+ m : m;
    s = s < 10 ? "0"+ s : s;

    hourEle.innerText = h;
    minuteEle.innerText = m;
    secondEle.innerText = s;
    ampmEle.innerHTML = ampm;
    setTimeout(() => {
        clock()
    }, 1000);
}

clock();

