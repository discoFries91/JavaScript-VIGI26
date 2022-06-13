
fetch("https://magnetic-melon-yam.glitch.me")
    .then((resp) => resp.json())
    .then((response) => {
      const firstItem = response[0];
      renderUser(firstItem);
    })
    .catch((error) => {
      console.error(error, ": Failed to load comments");
    });


const renderUser = (user) => {
    const Id = user.id;
    const Name = user.name;
    const City = user.city;
    const favColor = user.favColor;
      
    const tdId= document.createElement("td");
    const tdName = document.createElement("td");
    const tdCity = document.createElement("td");
    const tdfavColor = document.createElement("td");

    tdId.textContent = Id;
    tdName.textContent = Name;
    tdCity.textContent = City;
    tdfavColor.textContent = favColor;
  
    const trUser = document.createElement("tr");
    trUser.append(tdId, tdName, tdCity, tdfavColor);
  
    document.getElementById("users").append(trUser);
}

const renderTable = () => {
    const thId = document.createElement('th');
    const thName = document.createElement('th');
    const thCity = document.createElement('th');
    const thColor = document.createElement('th');

    thId.textContent = "id";
    thName.textContent = "city";
    thCity.textContent = "name";
    thColor.textContent = "fav_color";

    const thRow = document.createElement('tr');
    const thead = document.createElement('thead');
    const table = document.createElement('table');

    thRow.append(thId, thName, thCity, thColor);
    thead.append(thRow);
    table.append(thead);

    document.body.append(table);
 };