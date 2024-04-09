let fruitObjects = [
    {name: "apple", color: "red", shape: "round", emoji: "🍎"},
    {name: "banana", color: "yellow", shape: "curved", emoji: "🍌"},
    {name: "orange", color: "orange", shape: "round", emoji: "🍊"},
    {name: "kiwi", color: "brown", shape: "oval", emoji: "🥝"},
    {name: "mango", color: "yellow", shape: "oval", emoji: "🥭"}
]

function clearCards() {
    let fruitContainer = document.querySelector('#cards');
    while(fruitContainer.firstChild) {
        fruitContainer.removeChild(fruitContainer.firstChild);
    }
}

function runProgram() {
    console.log("Program is running");

}

document.addEventListener('DOMContentLoaded', runProgram);