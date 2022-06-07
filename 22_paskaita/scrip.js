// const networkRequest = () => {
//     setTimeout(() => {
//         console.log("Async Code");
//     }, 4000);
// };


// const resolvedPromise = new Promise((resolve,reject) => {
//     resolve("17 celsius, Vilnius");
// });

// resolvedPromise.then(response => {
//     console.log(`Dabar yra ${response}`);
// });

const rejectedPromise = new Promise((resolve, reject) => {
    reject("Tinklas perjrautas");
})


rejectedPromise
    .then((response)=> {
       console.log(`Dabar yra ${response}`);
})
    .catch((error) => {
        console.error(error);
}).finally(() => {
    console.log("Kreipimasis į oro tarnyba");
});