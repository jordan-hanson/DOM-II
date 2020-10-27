// Your code goes here
const funBus = document.querySelector("h2.go")
const logZone = document.querySelector("#log")
console.log(logZone)
funBus.onmouseover = overLetsGo;
funBus.onmouseout = outLetsGo;
logZone.ondblclick = logDoubleClick;
function overLetsGo() {
    funBus.classList.add("goUpdated")
    funBus.innerHTML = "Your adventure begins"
}
function outLetsGo() {
    funBus.classList.remove("goUpdated")
}
function logDoubleClick(event) {
    logZone.textContent = `Position: (${event.clientX}, ${event.clientY})`
}