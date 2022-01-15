const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0";//set the initial value on the DOM
    // console.log(counter)

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");//get the target value for each counter and convert the string into a number
        const currentNumber = +counter.innerText//get the initial value and convert to number

        const increment = target / 500;/*This is used to say by how much the number 
        should incremented if it is high the counter will be slow. And makes sure all
        numbers finish incrementing at once.*/

        // console.log(increment)
    
        if (currentNumber < target) {
            counter.innerText = (currentNumber + increment);

            setTimeout(updateCounter, 1);//This makes the counter delay by one ms before firing otherwise you won't see the effect, it will complete at a speed of light
        }//To alter the speed of the counter don't increase the timing here, instead increase the target divider in the increment
    
    }
    updateCounter() 
    
})