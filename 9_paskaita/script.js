const painter = document.querySelector("input[name=painter]");
// () => arrow anoniminė funkcija


painter.addEventListener('input', (event) => {
    const value = event.target.value;
    const result = document.getElementById("painter-result");

    let paintedI = "";

    for(let i = 0; i< value - 1; i++){
        paintedI +="<div>I</div>";
    }
    for (i = 0; i< value; i++)  {
        paintedI +="<div>I</div>";
    }

    result.innerHTML = paintedI;
    
} );

const price = document.querySelector("input[name='price']");
const totalResult = document.querySelector("#sum-result");
price.addEventListener("blur", handleBlur);

let total = 0;

function  handleBlur (event) {
    const value = event.target.value;

    total += Number(value);
    
    totalResult.textContent = `Total: ${total}`;
    console.log(total);
    price.value = 0;
}

const fruitButton = document.querySelector("#add");

fruitButton.addEventListener("click", handleAddFruit);

function handleAddFruit(event) {
    event.preventDefault();

    const list = document.querySelector("#fruit-list");
    const fruit = document.querySelector("input[name='fruit']");

    // <li> </li>
    const newFruit = document.createElement("li");

    // <li>{fruit.value}</li>
    newFruit.textContent = fruit.value;

    // <ul>
    // <li>{fruit.value}</li>
    // </ul>

    list.append(newFruit);
    //nuima ivesta pries tai buvusia reiksme 
    fruit.value = "";
}

// 5 uzduotis

let counter = 0;
let randomNumber = Math.floor(Math.random() * 5) + 1;
// console.log(randomNumber);

function guessNumber(event) {
  event.preventDefault();
  counter++;
  const guessedNumber = Number(document.getElementById('guess').value);
  if (randomNumber === guessedNumber) {
    alert(`Atspėjai iš ${counter} karto`);
  }
  else {
    alert("Neatspėjai");
  }
}

document.querySelector('form').addEventListener('submit', guessNumber);

