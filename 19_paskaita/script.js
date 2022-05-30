// class Animal {
//     constructor(name) {
//       this.name = name;
//       this.color = color;
//     }
//   }

//   class Rabbit extends Animal {
//     constructor(name) {
//     super(name, color);
//     this.family = "rabbits";
//     this.created = Date.now();
//     }
//   }
  
  // let rabbit = new Animal ("White Rabbit", "white"); 
  // let rabbit = new Rabbit ("White Rabbit", "white"); 

  const itemForm = document.getElementById("item-form");

  const submitItemForm = (event) => {
    event.preventDefault();
    const item = document.querySelector("input[name='item']");
    const price = document.querySelector("input[name='price']");
    const count = document.querySelector("input[name='count']");
    console.log(item);
  };

  const itemForm = document.getElementById("item-form");
  itemForm.addEventListener("submit", submitItemForm);

