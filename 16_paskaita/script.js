const person = {
    name: "Rokas",
    surname: "Andreikenas",
    age: 23,
};

const people = [
   { id:1, name: "Rokas", surname: "Adreikenas", age:23},
   { id:1, name: "Tomas", surname: "Tomaitis", age:17},
   { id:1, name: "Simas", surname: "Simaitis", age:99},
   
];

console.log(people[people.length-1]);

// const firstItem = people[0]; // pirmas elementas is masyvo
// console.log(firstItem.name);
// const lastItem = people[people.lenght -1]; // paskutinis elementas is masyvo
// console.log(lastItem);

// people.push({ id:4, name: "Gokas", surname: "Songokas", age:99});
// people.shift();
// // console.log(people);

// // people.forEach((person) => {
// //     const fullName = `${person.name} ${person.surname}`;
// //         console.log(fullName);
// // });

// const peopleWithFullName = people.map((person) => {

//     const fullName = `${person.name} ${person.surname}`;
    
    
    
//     return {
    
//     ...person,
    
//     name: person.name.toUpperCase(),
    
//     surname: capitalize(person.surname),
    
//     fullName: fullName,
    
//     canDrive: person.age >= 18,
    
//     };
    
//     });
    
    
    
//     function capitalize(value) {

// return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();


// }
      
    
// console.log(peopleWithFullName);

const veggies = [
    { name: "Apple", category: "tree", price: 1 },
    { name: "Pear", category: "tree", price: 2 },
    { name: "Blackberries", category: "bush", price: 5 },
    { name: "Blueberries", category: "bush", price: 7 },
    { name: "Carrot", category: "dirt", price: 0.25 },
    { name: "Potato", category: "dirt", price: 0.3 },
];

// const cheapVeggies = veggies.filter(veggie => veggie.price <=1);
// const expensiveVeggies = veggies
//    .filter((veggie) => veggie.price >=6)
//    .map((v) => v.name);

// const expensiveVeggiesNames = expensiveVeggies.map((veggie) => veggie.name);

// console.log(cheapVeggies);
// console.log(expensiveVeggies);
// console.log(expensiveVeggiesNames);

// const sorted = veggies.sort((a,b) => (b.name > a.name ? -1: 1)); // nuo A - Z
// console.log(veggies);

function prices(array) {
// {name: "", }
    const sorted = array.sort((a,b) => a.price-b.price);
    const cheapest = sorted[0];
    const expensive = sorted[sorted.lenght -1];
    return {cheapest: cheapest, expensive: expensive};
}

const veggiesPrice = prices(veggies);

console.log(veggiesPrice.cheapest);
console.log(veggiesPrice.expensive);