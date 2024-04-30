// bouton lightmode/darkmode//

function myFunction() {
  let element = document.body;
  element.classList.toggle("darkmode");
}

//Swiper Demos pour tourner les photos//
var swiper = new Swiper(".mySwiper", {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Dernier exercice noté API//
function fetchHP(HP) {
  return fetch("https://hp-api.lainocs.fr/characters/" + HP).then((response) =>
    response.json()
  );
}

async function displayHP(HP) {
  const data = await fetchHP(HP);
  document.getElementById("harrypotter").innerHTML += `
       <h2>${data.name}</h2>
       <h5>${data.house}</h5>
       <h5>${data.patronus}</h5>
       <h5>${data.blood}</h5>
       <h5>${data.wand}</h5>
       <h5>${data.role}</h5>

       <img class="Images" src="${data.image}" alt=${data.name} />
       `;
}

displayHP("hermione-granger");
displayHP("harry-potter");
displayHP("ron-weasley");
displayHP("lord-voldemort");
displayHP("albus-dumbledore");
displayHP("sirius-black");
displayHP("bellatrix-lestrange");
displayHP("draco-malfoy");
displayHP("lucius-malfoy");

/*       function fetchHP (HP){ 
        return fetch ('https://hp-api.lainocs.fr/characters/' +HP)
        .then((response) => response.json())
        }
    
        async function displayHP(HP){
            const data = await fetchHP(HP)
            document.getElementById("harrypotter").innerHTML = `
           <h1>${data.name}</h1>
           <img src="${data.image}" alt="${data.name}" />
           <img class="Images" src="${data.image}" alt=${data.name} /> 
           `} */

//   displayHP('harry-potter')
