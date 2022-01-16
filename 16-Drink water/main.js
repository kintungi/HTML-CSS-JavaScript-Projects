



const smallCups = document.querySelectorAll(".cup-small");
const litres = document.getElementById("litres");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");


/*small cups

1. when a cup is clicked make it full
2.When a cup is clicked again, make it empty
3. when you select cup 5, all previous cups
should be filled.
*/

fillBigCup()

smallCups.forEach((cup, index1) => {
    cup.addEventListener("click", function(e, index) {
        fillCup(e, index1)
    }, false)
})

function fillCup(e, index1) {
    let target = e.target;
    // let index1 = index1;

    /*This code toggles the fill of the target small cup by decreasing the value of index hence the code block that follow below won't fill it*/
    if (target.classList.contains("full") && !target.nextElementSibling.classList.contains("full")) {
        index1--
    
    } else if  (smallCups[index1].classList.contains("full") && index1 === 7){
        index1--
        }
    
 

    smallCups.forEach((cup, index2) => {//This fills all cups that occur prior to the clicked cup
        if (index2 <= index1) {
            cup.classList.add("full") 
        } else {
            cup.classList.remove("full") 
        }
    })
    


    fillBigCup()
    
}





function fillBigCup() {

    const fullCups = document.querySelectorAll(".cup-small.full").length;
    // console.log(fullCups);
    const totalCups = smallCups.length;

    const cupFilled = Math.ceil(fullCups / totalCups * 100);//round it to the highest interger
    console.log(cupFilled);

    

    if(fullCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = "0";
    } else {
        percentage.style.visibility = "visible";
        percentage.innerText = `${cupFilled}%`
        percentage.style.height = `${fullCups / totalCups * 330}px`//map the percentage of cups filled to the heigt of water in big cup
    }

    if(fullCups === totalCups) {
        remained.style.visibility = "hidden";
        remained.style.height = "0";
    } else {
        remained.style.visibility = "visible";
        litres.innerText = `${2 - (250 * fullCups / 1000)}L`;//total number of litres minus filled cup litres, each cup has 250, then divided by 1000 to convert ml to litres
    }

}