// console.log("Dom failas");

// document.getElementById("id"); // vienaskaita grazina {}
// document.getElementsByClassName("klase"); // daugiskaita grazina []
// document.getElementsByName("name"); // daugiskaita grazina []
// document.getElementsByTagName("div"); // daugiskaita grazina []
// document.getElementById("pirmas"); // p
// const items = document.getElementsByClassName("item"); // [p , p]

// // items[0];

// // items[items.length - 1];

// document.getElementsByName("mano-input"); // []
// document.getElementsByTagName("p");
// document.querySelector("div"); // vienaskaita grazina pagal elementa {}
// document.querySelector(".card"); // vienaskaita grazina pagal klase {}
// document.querySelector("#price"); // vienaskaita grazina pagal id {}
// document.querySelector(".card div"); // vienaskaita

// const allParagraphs = document.querySelectorAll("p"); // daugiskaita []
// const first = allParagraphs[0];
// const last = allParagraphs[allParagraphs.length - 1];

// first.style.background = "red";
// const help = document.getElementById("help");
// help.textContent = "Rokas yra geras zmogus";
// help.style.background = "red";

// const greenName = document.getElementById("greenName");

// greenName.textContent = "Jonas";
// greenName.style.color = "green";

// const body = document.querySelector("body");

// body.style.background = "#4267B2";

// const greeting = document.getElementById("greeting");

// greeting.textContent = "Labadiena, geros dienos";
// greeting.style.textAlign = "center";

// const div = document.createElement("div");
// div.textContent = "Mano naujas divas";
// document.body.append(div); itumia i gala kaip vaikini elementa
// document.body.prepend(div); istumia i prieki

// const conatiener = document.createElement("div");
// const p = document.createElement("p");

// conatainer.append(p);

// document.querySelector("#id")

const blackCube = document.getElementById("blackCube");

blackCube.style.backgroundColor = "black";
blackCube.style.width = "100px";
blackCube.style.height = "100px";

const yellowCube = document.getElementById("yellowCube");

yellowCube.style.backgroundColor = "yellow";
yellowCube.style.width = "50px";
yellowCube.style.height = "50px";

const greenCube = document.getElementById("greenCube");

greenCube.style.backgroundColor = "green";
greenCube.style.width = "100px";
greenCube.style.height = "100px";

const redCube = document.getElementById("redCube");

redCube.style.backgroundColor = "red";
redCube.style.width = "150px";
redCube.style.height = "150px";

const fruitList = ["Bananas", "Apelsinas", "Obuolys", "Kivi"];
const ul = document.createElement("ul");

document.getElementById("fruitList").appendChild(ul);

fruitList.forEach(function (fruits) {
  const li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML += fruits;
});
