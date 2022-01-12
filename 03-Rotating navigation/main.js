const container = document.querySelector(".container");
const openNav_Button = document.getElementById("open"); 
const closeNav_Button = document.getElementById("close"); 
const circle = document.getElementById("circle");

/*function toggleNavigation(e) {
    const target = e.target;
    e.stopPropagation();
    e.preventDefault()

    if (container.classList !== "show-nav")  {
        container.classList.add("show-nav");
    } else if (container.classList === "show-nav") {
        container.classList.remove("show-nav");
    }
}*/


// circle.addEventListener("click", toggleNavigation, false);


openNav_Button.addEventListener("click", () => {container.classList.add("show-nav")}, false);
closeNav_Button.addEventListener("click", () => {container.classList.remove("show-nav")}, false);