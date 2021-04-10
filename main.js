'use strict';

const heroOne = {
  name: 'Sub-Zero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['ice sword', 'ice ax'],
  attack: function() {
    console.log(this.name + ' fight');
  }
};

const heroTwo = {
  name: 'Scorpion',
  hp: 70,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['harpoon', 'fireball'],
  attack: function() {
    console.log(this.name + ' fight');
  }
};

const createPlayer = (player, hero) => {
  const arena = document.querySelector('.arenas');
  const selectPlayer = document.createElement('div');
  const progressbar = document.createElement('div');
  const life = document.createElement('div');
  const name = document.createElement('div');
  const character = document.createElement('div');
  const img = document.createElement('img');

  selectPlayer.classList.add(`${player}`);

  progressbar.classList.add('progressbar');

  life.classList.add('life');
  life.style.width = hero.hp + '%';

  name.classList.add('name');
  name.innerText = hero.name;

  character.classList.add('character');

  img.src = `${hero.img}`;

  arena.appendChild(selectPlayer);

  selectPlayer.appendChild(progressbar);
  selectPlayer.appendChild(character);

  progressbar.appendChild(life);
  progressbar.appendChild(name);

  character.appendChild(img);

};

createPlayer('player1', heroOne);
createPlayer('player2', heroTwo);