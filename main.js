'use strict';

const characterOne = {
  name: 'Sub-Zero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['ice sword', 'ice ax'],
  attack: function() {
    console.log(this.name + ' fight');
  }
};

const characterTwo = {
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['harpoon', 'fireball'],
  attack: function() {
    console.log(this.name + ' fight');
  }
};

const createPlayer = (player, character) => {
  const arena = document.querySelector('.arenas');
  const createCharacter = document.createElement('div');
  createCharacter.classList.add(`${player}`);

  createCharacter.insertAdjacentHTML('beforeend', `
          <div class="progressbar">
              <div class="life">${character.hp}</div>
              <div class="name">${character.name}</div>
          </div>
          <div class="character">
              <img src="${character.img}" />
          </div>
  `);

  arena.appendChild(createCharacter);
};

createPlayer('player1', characterOne);
createPlayer('player2', characterTwo);