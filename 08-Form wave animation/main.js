const labels = document.querySelectorAll(".form-control label");
// ["Email", "Password"]

labels.forEach(label => {
    label.innerHTML = label.innerText//label string -  "Email"
    .split("")//splitting the string into an array of letters ["E","m","a","i","l"]
    .map((letter, index) => `<span style="transition-delay: ${index * 50}ms">${letter}
    </span>`)
    .join("")//join array items into a string
    
    label.addEventListener("click", () => label.parentNode.firstChild.input())

    // console.log(labels[2].innerHTML)
})



/*
const labels = document.querySelectorAll(".form-control label");
/ ["Email", "Password"]

labels.forEach((label, index) => {
    label.innerHTML = label.innerText//label string -  "Email"
    .split("")/splitting the string into an array of letters ["E","m","a","i","l"]
    .map((letter, index) => `<span style="transition-delay: ${index * 50}ms">${letter}</
    span>`)/["<span style="transition-delay: 0>E</span>","<span style="transition-delay: 50ms>m</span>","<span style="transition-delay: 100ms>a</span>" ...rest]
        /The code above creates javascript generates span nodes and adds a
        transition delay to each by multiplying its index by 50ms which ensures
        a steps delay effect animation, the one with small index fires first./
        .join("")//join array items into a string
    
        / label.addEventListener("click", () => label.previousSibling.focus())
    
        /console.log(labels[2].innerHTML)
    })*/