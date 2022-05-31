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

  class Item {
    constructor(name, price, count) {
      this.name = name;
      this.price = price;
      this.count = count;
    }

    addToList = () => {
      const list = document.getElementById("list");
      const newItem = document.createElement("li");
      newItem.textContent = `${name} x ${price} = $${
        this.count * this.price}`
      list.append(newItem)
    };
  }

  const itemForm = document.getElementById("item-form");

  const submitItemForm = (event) => {
    event.preventDefault();
    const itemName = document.querySelector("input[name='item']");
    const price = document.querySelector("input[name='price']");
    const count = document.querySelector("input[name='count']");

    const item  = new Item( itemName.value, Number(price.value), count.value);
    console.log(item);
  };

  const itemForm = document.getElementById("item-form");
  itemForm.addEventListener("submit", submitItemForm);

