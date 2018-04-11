const events = require(./events);
const outputDiv = document.getElementById('dinos');

const domString = (dinos) => {
  let strang = '';
  dinos.forEach((dino) => {
    strang += `<div class="dinos">`;
    strang += `<h2>${dino.type}</h2>`;
    strang += `<img src="${dino.img}">`;
    strang += `</div>`;
  });
  return strang;
};

const printToDom = (dinoArray) => {
  outputDiv.innerHTML = domString(dinoArray);
  domEvents();
};

module.exports = printToDom;
