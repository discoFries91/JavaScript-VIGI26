// const userName = "Rokas";
// const goodbye = `Viso gero ${userName}, lauksime sugrįžtant!`;

// const salary = 10000;
// const dollarSymbol = "$";

// const price = 10;

// if (price > 10) {
//   console.log("Perku");
// } else {
//   console.log("Neperku");
// }

// let result = "";
// if (price > 10) {
//   result = "Perku";
// } else {
//   result = "Neperku";
// }
// console.log(result);

// let result1 = "Neperku";
// if (price > 10) {
//   result1 = "Perku";
// }

// const hours = 24.5;
// let result = "";

// if (hours >= 0 && hours < 6) {
//   result = "Naktis";
// } else if (hours >= 6 && hours < 12) {
//   result = "Rytas";
// } else if (hours >= 12 && hours < 18) {
//   result = "Diena";
// } else if (hours >= 18 && hours <= 24) {
//   result = "Vakaras";
// } else {
//   result = "Netinkamas skaicius";
// }

// console.log(result);

// const hours = 5;
// let message =
//   hours >= 0

//ternary operatorius naudojant

// const price = 10;
// const result = price > 10 ? "Perku" : "Neperku";
// const hours = 5;
// const message =
// hours >= 0 && hours < 6
// ? "Naktis"
// : hours >= 6 && hours < 12
// ? "Rytas"
// : hours >= 12 && hours < 18
// ? "Diena"
// : hours >= 18 && hours <= 24
// ? "Vakaras"
// : "blogas laikas";
// console.log(message);

// const myName = "Julija";
// const nameLength = myName.length;
// const firstChar = myName[0]; // charAt(0)
// const lastChar = myName[myName.length - 1]; // myName.charAt(nameLength - 1)

// console.log(firstChar);
// console.log(lastChar);
// console.log(myName.length);

// for (let i = 0; i < nameLength; i++) {
// const char = myName[i];
// console.log(char);
// }

// for (let i = 0; i < myName.length; i++) {
// const char = myName[i];
// console.log(`${i + 1} raide yra ${char}`);
// }

// Turi return

// number yra argumentas
// function square(number) {
//   return number * number;
// }

// const squared = square(5);

// console.log(squared);
// console.log(square(5));

// Neturi return

// //1.Funkcija

// function cube(num) {
//   return num * num * num;
// }

// console.log(cube(5));

// //2.Funkcija

// function multi(num1, num2) {
//   return num1 * num2;
// }

// console.log(multi(2, 3));

// //3.Funkcija

// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(6, 8));

// //4.Funkcija

// function substraction(num1, num2) {
//   return num1 - num2;
// }

// console.log(sub(10, 6));

// //5.Funkcija

// function divition(num1, num2) {
//   return num1 / num2;
// }

// console.log(divi(100, 25));

//6.Funkcija

function wordLength(textContent) {
  return textContent.length;
}

console.log(wordLength("Jonas"));

//7.Funkcija

function compareNumber(num1, num2) {
  return num1 > num2 ? true : false;
}

console.log(compareNumber(7, 6));

//8.Funkcija

function firstAndLastChar(string) {
  return string[0] + string[string.length - 1];
}

console.log(firstAndLastChar("Zveriukas"));
