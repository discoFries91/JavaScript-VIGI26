
const ageInput = document.getElementById("age");
const ageForm = document.getElementById("age-form");
ageForm.addEventListener("submit", handleSubmitAgeForm);

function handleSubmitAgeForm(event) {
  event.preventDefault();

  const age = document.querySelector("input[name=age]");
  const result = document.querySelector("#result");

  result.textContent=""
 
}

