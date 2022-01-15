const faqButtons =document.querySelectorAll(".faq-toggle");

// console.log(faqButtons)

faqButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        let target = e.target;

        // button.parentNode.classList.remove("active")

        button.parentNode.classList.toggle("active")
    })
})