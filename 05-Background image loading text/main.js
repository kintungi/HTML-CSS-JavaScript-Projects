const loadingText = document.querySelector(".loading-text");
const background = document.querySelector(".bg");



/*
What I want to achieve:
I want the nmber to count from 0 to 100 and the
background to reduce its blur from 70px to 0 in
the same duration.

Steps to achieve:
1. Create a function to count the number
2. map the countdown to the background blur 

//Create a function to count the number 0-100
1. Use a timing funtion to increase number 0 by 1 until
it reaches 100.
2. map the current number to the DOM

//create a code to decrease the blur mapping it to the countdown
*/




let intv = setInterval(blurring, 60);
    // removeBlur();


let load = 0;

function blurring() {
    load++ 
    console.log(load); 

    if (load > 99) { //To ensure the number is not counted forever
       
    clearTimeout(intv);
    }
    loadingText.textContent = `${load}%`;
    loadingText.style.opacity =  scale(load, 0, 100, 1, 0) //map 0-100 to 1-0
    background.style.filter = `blur(${scale(load,0, 100, 30, 0)}px)`
    
   if (load === 100) {
       console.log("welcome");
       let greeting = document.querySelector(".greeting");
       setTimeout(() => greeting.classList.add("show"), 1000);
   }
    
}

//function from stackoverflow
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

