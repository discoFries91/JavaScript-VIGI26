// Žinoti primityvius duomenų tipus ir jų apibrėžimą.
// Boolean object 
// NUmber object 
// String obejct






const name = "Rokas";
const age = 7; 
const isHot = true;
const notFound = undefined;
const noValue = null;

const isHotString = Boolean(isHot).toString();

// console.log(isHot);
// console.log(isHotString);

const count = "15";

const countNumber = Number(age);

// console.log(count + count);
// console.log(countNumber + countNumber);


// integer - sveikasis skaičius
// console.log(Number.isInteger(5));

//paverčiam į string
const myNumber = 5.752;
// console.log(Number(5.752).toString());
// console.log(myNumber.toString());

//užapvalina skaičiu po kablelio (kiek skaičiu po kablelio => 5.22 = (1) = 5.2 ))
// console.log(myNumber.toFixed(1));

const salary = 10.7413666666666;

const sentence = "My name is Rokas and I am very happy";

//suranda stringe kito stringo dalį. Yra Case-sensitive (didziosios, mazasios raides)
// console.log(sentence.includes("happy"));

//pradzia ir pabaiga
// console.log(sentence.slice(0, 8));
// // nuo pradžios iki pat pabaigos
// console.log(sentence.slice(21));
// // nuo pradžios iki pabaigos (paskutinius simbolius nukerta (-5)
// console.log(sentence.slice(0,-5));
// //nuo galo 
// console.log(sentence.slice(-5));

// const badText = "   Gelp  "
// ištrina bereikalingus tarpus, kad sutvarkytų duomenis 
// console.log(badText.trim());


const upperCased = sentence.toUpperCase(); // visas raides padaro didziasias
// console.log(upperCased);

const lowerCased = sentence.toLowerCase();// visas raides padaro mazasias
// console.log(lowerCased);


// Patikrina ar strangai yra vienodi (not case-sensitive)
function areSameStrings(firstString, secondString) {
    return firstString.toUpperCase() === secondString.toUpperCase();
}

// console.log(areSameString("Rokas", "rokas")); // => "rokas" === "Rokas"

let result = "";
const resultCount = 5;

//pakartoja stringa tiek kiek pauodam į argumentą;
const result = dog.repeat(resultCount);
console.log(result);

const tagInput = "Prekyba Marketingas Programavimas Vadyba";
const splitted = sentence.split(" ");

const countryInput = "Anglija, Sveicarija, Amerika, Latvija, Gruzija";
const countries = countryInput.split(", ");

console.log(tags)
console.log(countries);
