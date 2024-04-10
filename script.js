let fruitObjects = [
    {name: "apple", color: "red", shape: "round", emoji: "🍎"},
    {name: "banana", color: "yellow", shape: "curved", emoji: "🍌"},
    {name: "orange", color: "orange", shape: "round", emoji: "🍊"},
    {name: "kiwi", color: "green", shape: "oval", emoji: "🥝"},
    {name: "mango", color: "yellow", shape: "oval", emoji: "🥭"},
    {name: "melon", color: "green", shape: "oval", emoji: "🍈"},
    {name: "watermelon", color: "green", shape: "oval", emoji: "🍉"},
    {name: "grape", color: "purple", shape: "round", emoji: "🍇"},
    {name: "pineapple", color: "yellow", shape: "round", emoji: "🍍"}
]

function clearCards() {
    let fruitContainer = document.querySelector('#cards');
    while(fruitContainer.firstChild) {
        fruitContainer.removeChild(fruitContainer.firstChild);
    }
}

function addFruitCard(fruit){
    let newFruitCard = document.createElement('div');

    let fruitHeading = document.createElement('h3');
    newFruitCard.textContent = fruit.name;
    newFruitCard.appendChild(fruitHeading);

    let fruitColor = document.createElement('p');
    fruitColor.textContent = `Color: ${fruit.color}`;
    fruitColor.style.color = fruit.color;
    newFruitCard.appendChild(fruitColor);

    let fruitShape = document.createElement('p');
    fruitShape.textContent = `Shape: ${fruit.shape}`;
    newFruitCard.appendChild(fruitShape);

    let fruitEmoji = document.createElement('p');
    fruitEmoji.textContent = `Emoji: ${fruit.emoji}`;
    newFruitCard.appendChild(fruitEmoji);

    let fruitContainer = document.querySelector('#cards');
    fruitContainer.appendChild(newFruitCard);
    newFruitCard.classList.add('fruitCard');
}

function runProgram() {
    console.log("Program is running");

    for(const fruit of fruitObjects){
        addFruitCard(fruit);
    }

    // let apple = fruitObjects[0];
    // addFruitCard(apple);

    // let banana = fruitObjects[1];
    // addFruitCard(banana);

    // let orange = fruitObjects[2];

    // let kiwi = fruitObjects[3];

    // let mango = fruitObjects[4];

    let lessThan6Button = document.createElement('button');
    lessThan6Button.textContent = "Fruits with less than 6 letters";

    let equalTo6Button = document.createElement('button');
    equalTo6Button.textContent = "Fruits with exactly 6 letters";

    let fruitIsGreenButton = document.createElement('button');
    fruitIsGreenButton.textContent = "Fruits that are green";

    let buttonsContainer = document.querySelector('#buttonsContainer');
    buttonsContainer.appendChild(lessThan6Button);
    buttonsContainer.appendChild(equalTo6Button);
    buttonsContainer.appendChild(fruitIsGreenButton);
    lessThan6Button.addEventListener('click', filterByLessthan6);
    equalTo6Button.addEventListener('click', filterBy6);
    fruitIsGreenButton.addEventListener('click', filterByGreen)

}

function fruitIsGreen(fruit){
    if(fruit.color.length == 5){
        return true;
    }
    return; false;
}

function filterByGreen(){
    clearCards();
    let greenFruits = [];
    for(const fruit of fruitObjects){
        if(fruitIsGreen(fruit)){
            greenFruits.push(fruit);
        }
    }
    for (const fruit of greenFruits){
        addFruitCard(fruit);
    }
}


function fruitIsLessThan6(fruit){
    if(fruit.name.length < 6){
        return true;
    }
    return; false;
}
function filterByLessthan6(){
    clearCards();
    let lessThan6Fruits = [];
    for(const fruit of fruitObjects){
        if(fruitIsLessThan6(fruit)){
            lessThan6Fruits.push(fruit);
        }
    }
    for (const fruit of lessThan6Fruits){
        addFruitCard(fruit);
    }
} 

function fruitIs6(fruit){
    if(fruit.name.length == 6){
        return true;
    }
    return false;
}
function filterBy6(){
    clearCards();
    let equalTo6Fruits = [];
    for(const fruit of fruitObjects){
        if(fruitIs6(fruit)){
            equalTo6Fruits.push(fruit);
        }
    }
    for (const fruit of equalTo6Fruits){
        addFruitCard(fruit);
    }
}
document.addEventListener('DOMContentLoaded', runProgram);