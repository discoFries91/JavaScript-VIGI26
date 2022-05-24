// Padeda ištrinti arba įterpti masyvo elementą į pasirinktą vietą
// .splice()

// const sentence = ["I", "study", "JavaScript", "right", "now"];

// const firstTwoElements = sentence.splice(0,2); //Ištrina pirmus du ir grąžina
// sentence.splice(2,2); //Nuo antros vietos ištrina du;
// sentence.splice(2,1, "Typescript"); // Pakeičia masyvo elementą kitu
// sentence.splice(1,4, "studied", "Typescript", "before");
// console.log(sentence);

// const sliced = sentence.slice(0, 3); // Pirmus tris elementus 
// const sliced = sentence.slice(-3); // Paima paskutinius tris

// const number = [7,8,1,0.5,8,6,10,20,30,40];

// const total = numbers.reduce((total, number) => {
//     console.log(total);
//     return total + number;
// }, 0);

// const total = numbers.reduce((total, number) => total + number, 0);

// const sortedAscendingOrder = numbers.sort((a-b) => a-b); //surikiuoja didejimo tvarka
// const sortedDescendingOrder = numbers.sort((a-b) => b-a); // surikiuoja mažėjimo tvarka
// console.log(sortedAscendingOrder);
// console.log(sortedDescendingOrder);


// 1 užduotis

// const musicGendres = ["Jazz", "Blues"]; //1.1
// // rokas style.push("Rock-n-Roll");
// musicGendres.push("Rock-n-Roll"); //1.2
// musicGendres.splice(1,1,"Classics"); //1.3
// musicGendres.splice(0,2-3);

// console.log(musicGendres);
// const styles = ["Jazz", "Blues"]; // 1
// console.log(styles);
// styles.push("Rock-n-Roll"); // 2
// console.log(styles);
// styles.splice(1, 1, "Classics"); // 3
// console.log(styles);
// const firstElement = styles.shift(); // 4
// console.log(firstElement);
// console.log(styles);
// styles.unshift("Rap", "Reggae"); // 2
// console.log(styles);

// const arr = [11, -2, 34, 45];

// function getMaxSubSum(array) {
//     const sum = array.reduce((total, num) => (num > 0 ? total + num : total), 0);
//     return sum
// }

// function getMaxSubSum(array) {
//     const sum = array.reduce((total, num) => {
//       if (num > 0) {
//       return total + num;
//       } else {
//       return total;
//       }
//     }, 0);
//     return sum;
// }

// const sum = getMaxSubSum(arr);
// console.log(sum);

// const friends = ["Jonas", "Paulius", "Antanas"];
// friends.sort();
// friends.reverse()

// console.log(friends);

const people = [
    {
      name: "Petras",
      age: "18"
    },
    {
      name: "Jonas",
      age: 15
    },
    {
      name: "Antanas",
      age: 20
    },
    {
      name: "Urtė",
      age: 10
    },
    {
      name: "Diana",
      age: 25
    },
    {
      name: "Ieva",
      age: 16
    }
  ];

  console.log(people.filter())