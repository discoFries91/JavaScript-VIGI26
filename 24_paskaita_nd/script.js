


fetch("https://olive-bead-glazer.glitch.me")
    .then((resp) => resp.json())
    .then((response) => {
        const car = response.slice(0, 5);

        car.forEach((car) => renderTodo(car));
    })
    
    .catch((error) => {
        console.error(error);
});
