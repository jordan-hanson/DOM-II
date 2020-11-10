// Your code goes here
const funBus = document.querySelector("h2.go")
const logZone = document.querySelector("#log")
const theButton = document.querySelector('.btn')
console.log(theButton, "this is my button")
theButton.addEventListener('click', e => console.log('click'))
theButton.addEventListener('click', newPage)
theButton.addEventListener('click', updateBtn)
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
function newPage() {
    theButton.setAttribute("href", "https://www.google.com");
}
function updateBtn(e) {
    console.log(`button node name when clicked ${e.target.nodeName}`)
    theButton.style.backgroundColor = 'red'
}