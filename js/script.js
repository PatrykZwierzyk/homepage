{
    const welcome = () => {
        console.log("Witajcie");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body")
        const themeName = document.querySelector(".js-themeName")
        body.classList.toggle("dark");
        themeName.innerText = body.classList.contains("dark") ? "jasne" : "ciemne"
    };

    const init = () => {
        const jsbutton = document.querySelector(".js-button");
        jsbutton.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}