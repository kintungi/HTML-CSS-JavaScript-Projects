const searchContainer = document.querySelector(".search");
const button = document.querySelector(".button");
const input = document.querySelector(".input");

function activateInput(e) {
    let target = e.target;
    searchContainer.classList.toggle("active");
    input.focus();
}

button.addEventListener("click", activateInput, false);