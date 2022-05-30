// 18 paskaita Objektinis programavimas

// KOnstruktorius funkcija rašoma iš Dižiosios raidės


// function Book(name, author, year) {
//     this.name = name;
//     this.authorName = author;
//     this.year = year;
//     this.getInfo = () => {
//         return `${this.name} parašė ${this.authorName}`;
//     };
//     this.getYears = () => {
//         const today = new Date();
//         return today.getFullYear() - this.year;
//     };
// }

class Book {
    constructor(name, author, year) {
        this.name = name;
        this.authorName = author;
        this.year = year;
    }

    getInfo = () => {
        return `${this.name} parašė ${this.authorName} knygą`;
    };

    getYears = () => {
    const today = new Date();
    return today.getFullYear() - this.year;
    };
    
}

const harryPotterBook = new Book("Harry Potter", "J.K.Rowling", 1997);
const randomBook = new Book("Random Writter", "Very Random", 2022);

console.log(harryPotterBook.getInfo());
console.log(harryPotterBook.getYears());
console.log(randomBook.getInfo());


class Employee {
    constructor(position, wage, experience){
        this.position = position;
        this.wage = wage;
        this.experience = experience;
    }

    getBonus = () => {
        if(this.experience < 5) {
            return this.wage;
        } else if (this.experience < 10) {
            return this.wage *2;
        } else {
            return this.wage *3;
        }
    };
}

const sofwareDeveloper = new Employee("Front-End engineer", 4000, 2);
const salesManager = new Employee("Sales Manager", 6000, 7);

console.log(sofwareDeveloper.getBonus());
console.log(salesManager.getBonus());