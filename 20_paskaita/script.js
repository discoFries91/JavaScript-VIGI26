// 1 pratimas


class Cat {
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }

    isFat(){
        if (this.weight >= 5) {
            return `${this.name} yra storas kačiukas`;
        } else {
            return `${this.name} yra plonas kačiukas`;
        }
    }
}

const cat = new Cat("Kleopatras", 7);
console.log(cat.isFat());

// 2 pratimas


// pvz: fn([1,5,"a","g","z,6"]) => [1,5,6]
// arr.filter(x=> isNaN(x))

const randomArray = [1,5,"a","g","z",6];
//! prie isNAn(x) duod apriesinga reiksme
const removeNmmbersFromArray = (arr) =>  arr.filter(x => isNaN(x));
const removeLettersFromArray = (arr) =>  arr.filter(x => !isNaN(x));
// isNaN(1) => false
// isNaN(5) => false
// isNaN("a") => false


const removedNUmbers = removeNmmbersFromArray(randomArray);
const removedLetters = removeLettersFromArray(randomArray);

console.log(removedNUmbers);
console.log(removedLetters);

//!true => false
//!false => true
//!!true => true
//!!false => false
// !!"rokas" => ture
// !"rokas" => false

// 3 pratimas

let test = "Petras 123 Slekys";

// split("") ["a", "b", "c"]
// map(char) => "a" + "a"
// join("") => ["a", "a"] => "aa"

const newTest = test
    .split("")
    .map((char) => {return char + char}) //čia reikės pakeisti kažką, kad gautume "Rokas !!@@##$$%%^^ Tomas 112233" 
    .join("");

// isNan("a") ? "a" + "a" + "a" ž> "aa"
// isNan(1) ? "1" + "1" : "1" => "1"

console.log(newTest);

//Pirma užduotis
const testString = "Rokas !@#$%^ Tomas 123"
// ats: "Rokas !!@@##$$%%^^ Tomas 112233"




// patikrinti ar susideda is 5 skaiciu
// patikrinti ar susideda is 3 skaiciu ir 2 raidziu
// patikrinti ar turi tarpa


const removeNumbersFromArray = (Array) =>  Array.filter(x => isNaN(x));
const removeLettersFromArray = (Array) =>  Array.filter(x => !isNaN(x));

const checkPostCode = (postCode) => {
    const letters = removeLettersFromArray(postCode.split(""));
    const numbers = removeNumbersFromArray(postCode.split(""));

    if(removedLetters.lenght === 5){
        return true;
    } if else (letters.lenght === 3 && numbers.lenght === 2){
        return false;
    }
};

const code = "1235"; //false

console.log(checkPostCode(code));