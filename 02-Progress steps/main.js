//caching DOM reference to the objects
const circles = document.querySelectorAll(".circle");
console.log(circles);
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const progressBar = document.querySelector(".progress");
console.log(progressBar);




let currentStep = 1; //setting the initial point

const nextStep = () => {
    if (currentStep < circles.length) {
        currentStep++;
        prevButton.classList.remove("disabled");
        prevButton.classList.add("active");
    }
    

    update();

}
const previousStep = () => {
    if (currentStep > 1) {
        currentStep--;

        update()
    }
    // console.log(currentStep);



}

function update() {
    circles.forEach((circle, index) => {
        if (index < currentStep) {
            circle.classList.add("active");
            
        } else {
            circle.classList.remove("active");
        }
        
    })

    let percentage = ((currentStep / circles.length) * 100 + `%`);
    // console.log(percentage);

    progressBar.style.width = ((currentStep - 1) / (circles.length - 1)) * 100 + `%`
    /*Substracted 1 from current step and circles length so that
    I can get the correct percentage value*/

    //This code below updates the active / disabled state of buttons
    

    if (currentStep === 1) {
        prevButton.disabled = true;
} else if (currentStep === circles.length) {
    nextButton.disabled = true;
} else {
    prevButton.disabled = false;
    nextButton.disabled = false;
}
}

nextButton.addEventListener("click", nextStep, false)
prevButton.addEventListener("click", previousStep, false)