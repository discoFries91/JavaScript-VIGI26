const fetchRandomUser = async () => {
    try {
    const response = await fetch('https://randomuser.me/api/');
    if (response.ok) {
        const data = await response.json();
        renderUserCard(data.results[0]);
    }
    }   catch(error) {
        console.error(error);
    }
};

fetchRandomUser();

const getRandomUser =  async () => {
    try {
      const resp = await fetch('https://randomuser.me/api/');
      const response = await resp.json();
    } catch (error) {
        console.error(error);
    }
};

getRandomUser ()

fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then(response => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });

// 1 užduotis

https://magnetic-melon-yam.glitch.me