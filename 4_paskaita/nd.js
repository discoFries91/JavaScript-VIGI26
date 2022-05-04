// Do while

// 1.Užduotis

// let i = 0;

// while(i<3){
//     console.log("Jonas");
//     i++;
// }

// 2.Užduotis

// let combo = '';
// const name = 'John';
// let times = 6;
// do {
//   combo += name;
//   times--;
// } while (times > 0);
// console.log(combo);

// const randomNumber = Math.floor(Math.random() * 5) + 1;
// if (randomNumber === 1) {
//   console.log("You won");
// } else {
//   console.log("Try again next time");
// }

// function getLaugh(num) {
//     let message = '';
//     for(let i = 0; i < num; i++) message += 'ha';
//   return message;
// }
 
// console.log(getLaugh(4));

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}