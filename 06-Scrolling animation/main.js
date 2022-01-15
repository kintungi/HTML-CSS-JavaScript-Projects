const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();//this function is called twice, on load and on scroll

function checkBoxes() {
    // console.log(window.innerHeight )
    /*this is used to check the trigger point but since 
    the we want the event to trigger a few point before 
    the position of the box, we edit the value to 
    return a bit smalller number, see below*/
    // console.log(window.innerHeight / 5 * 4.5)

    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        //getting the rectangle properties of each box
        // console.log(rect);
        boxTop = rect.top;

        if (boxTop < triggerBottom) {//If a box goes above the trigger point
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    })
}