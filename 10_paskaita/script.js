// Objekto savybė (property) yra reikšmės (string, numberm array, obejct ir t.t.) mėlyna spalva
// Obejkto metodai (method) yra metodas (funkcijos atitikmuo). Reikia iškviesti ir paduoti parametrus (nebūtinai) 

// index.html yra document

const nameInput = document.getElementById("name");

console.log(nameInput.textContent);
console.log(nameInput.innerText);
console.log(nameInput.innerHTML);

// nameInput.innerHTML = "<ul><li> Ha ha ha </li></ul>";

nameInput.addEventListener("click", handleClickOnName);


// background-color: red
// backgroundColor = "red"
function handleClickOnName() {
    nameInput.style.color = "red";
    nameInput.style.background = "blue";
    nameInput.style.textAlign = "right";
    nameInput.style.fontSize = "72px";
}

const jumpButton = document.getElementById("jump");

jumpButton.addEventListener("click", handleJump);

jumpButton.style.cssText = "position: absolute; top: 30px; right: 30px;"

let inTop = true;

function handleJump() {
    if(inTop){
        jumpButton.style.cssText = "position: absolute; bottom: 30px; left: 30px;";
        jumpButton.textContent = "Jump to top";
        inTop = false;
    } else {
        jumpButton.style.cssText = "position: absolute; top: 30px; right: 30px;";
        jumpButton.textContent = "Jump to bottom";
        inTop = true;
    }
    // inTop = !inTop;
}

const backwardButton = document.getElementById("backwards");

backwardButton.addEventListener("click", handleGoBackwards);

let position = 0;
const topLeft = "position: absolute; top: 10px; left: 10px;";
const topRight = "position: absolute; top: 10px; right: 10px;"; 
const bottomRight = "position: absolute; bottom: 10px; right: 10px;"; 
const bottomLeft = "position: absolute; bottom: 10px; left: 10px;";

backwardButton.style.cssText = topLeft;

function handleGoBackwards() {
    if(position === 0){
        backwardButton.style.cssText = bottomLeft;
    } else if (position===1) {
        backwardButton.style.cssText = bottomRight;
    } else if (position===2) {
        backwardButton.style.cssText = topRight;
    } else {
        backwardButton.style.cssText = topLeft;
        position = -1;
    }
    position++;
    console.log(position);
}
    
