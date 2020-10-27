// Your code goes here
const funBus = document.querySelector("h2.go")
console.log(funBus)
funBus.onmouseover = overLetsGo;
funBus.onmouseout = outLetsGo
function overLetsGo() {
    funBus.classList.add("goUpdated")
    funBus.innerHTML = "Your adventure begins"
    // funBus.innerHTML = 'The Fun Bus underlined?'
}
function outLetsGo() {
    funBus.classList.remove("goUpdated")
}
