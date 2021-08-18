
let timeDiv = document.getElementById("time")
let t = setInterval(() => {
    // if (t) {
    //     clearInterval(t)
    // }
    timeDiv.innerText = '当前时间：' + getCurTime()
}, 1000);