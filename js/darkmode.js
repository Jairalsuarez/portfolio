let htmldoc = document.querySelector("#html")
let btnDark = document.querySelector("#darkmode")

btnDark.addEventListener("click", cambiarDarkmode)

function cambiarDarkmode() {
    htmldoc.classList.toggle("dark")       

}
