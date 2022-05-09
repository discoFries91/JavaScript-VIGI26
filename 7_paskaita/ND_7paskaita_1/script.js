// const nameForm = document.getElementById("name-form");
//     nameForm.addEventListener("submit", handleSubmitNameForm);

//     function handleSubmitNameForm(event) {
//         event.preventDefault();
//     }

// Pradzia.
// document.querySelector("form").addEventListener("submit", myFunction);

//   function myFunction(event) {
//       event.preventDefault();
//       console.log(document.querySelector("input[name=name]"));
//   }

// 1.Uzduotėlė
// document.querySelector("form").addEventListener("submit", myFunction);

//   function myFunction(event) {
//       event.preventDefault();
//       const nameInput = document.querySelector("input[name=name]");
      
//       alert(nameInput.value);
//       nameInput.value="";
//   }


const form = document.querySelector("form");
const result = document.getElementById("result");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const ageInput = document.getElementById("age");
  
 
}


