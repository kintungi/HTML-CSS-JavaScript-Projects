const elTags = document.getElementById("tags");

const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
    let target = e.target;

    // console.log(target.value);
    createTags(target.value);

    if(e.code === "Enter") {
        setTimeout(() => {
            target.value = ""
        }, 10) //This clears the textarea ready to run a random select functions

        randomSelect()//a function to select a random tag
    }
})
let value = ""
// let value = "francis, kintungi ,  , hey  hi, , " /used this for testing
function createTags(value) {
let tags = value.split(",") //split the string using a comma(,) delimeter
.map((tag) => tag.trim())//remove white space around any item of a tag
.filter(tag => tag !== "")//remove empty tags
// .filter(tag => tag.trim() !== "")

// console.log(tags)

elTags.innerHTML = "";//clear the element to avoid piling up

tags.forEach( tag => {
    const tagSpan = document.createElement("span");//create a span element for each tag
    tagSpan.classList.add("tag");//add a class of tag
    tagSpan.innerText = tag;//append a tag string
    elTags.appendChild(tagSpan)//append a tag to the tags container
})

} 

createTags(value)



/*This highlights tags randomly to give feedback to 
the user that the algorithm is picking tags
randomly*/

function randomSelect() {
    // console.log(123)
    const times = 30;//The number of times to highlight tags

    const interval = setInterval(() => {//picks random tag after every 100ms
        const randomTag = pickRandomTag()

        highlightTag(randomTag)//highlight a randomly selected tag

        setTimeout(() => {//Remove the highlight after 100ms
            unHighlightTag(randomTag)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearTimeout(interval)//clear the setInterval function

        setTimeout(() => {//After random higlighting now we select a tag to settle for finally
            const randomTag = pickRandomTag();//generate random number

            highlightTag(randomTag)//highlight the selected tag

        }, 100)
    }, times * 100)
    /*since tags are higlighted 30 times and each 
    takes 100ms, we have to get the total duration
    then stop the fucntion that highlights the tags*/

}


//Utility functions
function pickRandomTag() {
    const tags = document.querySelectorAll(".tag")//get the tag spans(tags)
    return tags[Math.floor(Math.random() * tags.length)]
    /*this generates random number between 0(included) and 
    1(not included) times the nodelist legth
    then rounds the number to the nearest integer*/
}

function highlightTag(tag) {//this highlights the randomly selected tag
    tag.classList.add("highlighted")
}

function unHighlightTag(tag) {//When a new tag is highlighted, unhighlight  the previous one
    tag.classList.remove("highlighted")
}
