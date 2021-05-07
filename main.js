import './style.css';
import { createElement, removeAllChildren } from './utils/elements';
import { createCharacterElement } from './components/character';
import { getCharacters } from './utils/api';
import { debounce } from './utils/timer';

getCharacters('').then((characters) => {
  const characterElements = characters.map(createCharacterElement);
  cardContainer.append(...characterElements);
});

const cardContainer = createElement('section', {
  className: 'cards',
  innerText: 'Card-Container',
});

const mainElement = createElement('main', {
  className: 'main',
  children: [
    createElement('header', {
      className: 'header',
      children: [
        createElement('h1', {
          className: 'title',
          innerText: 'PokeDex',
        }),
        createElement('input', {
          className: 'searchField',
          placeholder: 'Search Pokemon',
          autofocus: true,
          oninput: debounce((event) => {
            // clear all children per default
            removeAllChildren(cardContainer);
            // get the value from serch input
            const search = event.target.value;
            // get API Data of searched characters
            getCharacters(search).then((characters) => {
              const characterElements = characters
                .filter((character) =>
                  character.name.toLowerCase().includes(search.toLowerCase())
                )
                .map(createCharacterElement);
              // append cardContainer by searched characters
              cardContainer.append(...characterElements);
            });
          }, 300),
        }),
        createElement('img', {
          className: 'searchIcon',
          src: '<i class="fas fa-search"></i>',
        }),
      ],
    }),
    cardContainer,
    createElement('footer', {
      className: 'footer',
      innerText: 'GitHubLink & Created By Daniel Flores Medina',
    }),
  ],
});

document.querySelector('#app').append(mainElement);
