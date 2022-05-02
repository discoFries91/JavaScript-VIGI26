// One line komentaras

/*
  Sveiki čia yra 
  Multi lane komentaras
*/

// Sukuriame kintamuosius
let myName; 
let age;
let mySurname;
let fullName;
let result;
let average;
let percent;


console.log(myName); // undefined - vienas iš tipų naudojamas kai kintamasis yra sukurtas, bet neturi priskirtos reikšmės 




// Priskiriam kintamiesiems reikšmes
// rasoma tarp dvigubu arba viengubu kabuciu
myName = "Rokas"; // string = reiksme apsirasanti tarp kabuciu "" arba ''
age = 24; // number  = reiksme apsirasanti is skaiciu. Sveikas skaicius pvz.: 10 arba su kableliu 3.14
mySurname = "Andreikenas";
fullName = myName + " " + mySurname; // sudėtis - tarp dviejų tokių pačių tipų
result = age + age - 9;
average = (8 + 8 + 9 + 10 + 10) / 5; //45 / 5 = 9
// Iš viso surinkta 60eur., aš atnešiau 20e
percent = (100 * 20) / 60;
percentOutput = percent + "%"; // 33.33% number + string = string

console.log(myName);

// console.log(percent + "%");
// console.log("$" + average);

// console.log(9+9); // 18, nes skaičiai
// console.log("9"+"9"); // 99, nes stringai
// console.log(40 + "760"); // 40760


// 435=> 443355
// 78 -> 7788 {"7" + "7".........}

// sukuriame kintamuosius su const

const myDogName = "Cipas";
const myDogAge = 7;
const doubleDogName = myDogName + myDogName;
const greetings = "Sveikas" + "  "  +  myDogName + "  ";

let question = "How are you?";

console.log(question);

question = "Kaip laikaisi?";

// console.log(greetings);

// 1. Kada naudoti let ir kada const? Naudoti let tik tada kai reiksme yra kintanti. Kitais atvejais naudoti const
// 2. Sukūrus kintam ąjį, visada priskiriame pradinę reikšmę.
// 3. Visada naudojame triguba lygybę (tikrina reikšmę ir tipą)

// string, number, boolean (bool)

const yes = true; // teigiama reikšmė
const no = false; // neigiama reikšmė
let isAdult = true;


console.log("Rokas" == "rokas"); // "Rokas" yra "rokas" = false
console.log(10 == 10); // 10 yra lygu 10 = true
console.log(10 != 10) // 10 yra ne lygu 10 = false
console.log(5 != 4); // 5 yra nelygu 4 = true

// Dviguba lygye tikrina ar reikšmė yra lygi
// console.log("5" == 5);
// // Triguba lygybe tikrina ar reikšmė yra lygi ir tipas toks pat
// console.log("5" === 5);

// Visos neigiamos reiksmes yra - udefined, null, 0, ""

console.log("4" !=4);
console.log("4" !=4);

// 2.1
const userName = "Dovydas";

//2.2.
const goodbye = "Viso gero," + userName + ",lauksime sugrįžtant";

console.log(goodbye);
//2.3
