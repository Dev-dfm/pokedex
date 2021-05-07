import './style.css';
import { createElement } from './utils/elements';

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
          placeholder: 'Search pokemon',
          autofocus: true,
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
