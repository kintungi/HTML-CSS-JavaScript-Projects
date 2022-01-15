const elJoke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn")

jokeBtn.addEventListener("click", generateJoke);


generateJoke();


/*/Pure promise method

function generateJoke() {
    let config = {
        headers: {
            Accept : "application/json"//Accept is case sensitive never forget that
        }
    };

    fetch("https://icanhazdadjoke.com/", config)//Get a joke from the url, the config part is a custom configuration to request a .json file else it will return a .html file
    .then((response) => response.json())//The response  in fetch is never a json so you have to convert it into json data, data.json()
    .then((data) => {//The data is passed here and we specify the data we want from the json which is the joke
        let joke = data.joke;
        elJoke.innerHTML = joke;//the joke is written to the DOM
    })
    .catch((err) => console.log(`Failed: ${err.name}`))//If the process does not resolve, ie it rejects, catch the error object then write failed: error.name
}
*/

//Async-await method

async function generateJoke() {
    let config = {
        headers: {
            Accept : "application/json"//Accept is case sensitive never forget that
        }
    };

    let response = await fetch("https://icanhazdadjoke.com/", config)//Get a joke from the url, the config part is a custom configuration to request a .json file else it will return a .html file

    let data = await response.json();

    let joke = data.joke;

    elJoke.textContent = joke;
    
}