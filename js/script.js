console.log("Witajcie");

let jsbutton = document.querySelector(".js-button");
let body = document.querySelector(".body")
let themeName = document.querySelector(".js-themeName")

jsbutton.addEventListener("click", () => {
    body.classList.toggle("dark");

    themeName.innerText = body.classList.contains("dark") ? "jasne" : "ciemne"
});