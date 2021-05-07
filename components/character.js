import './character.css';
import { createElement } from '../utils/elements';

export function createCharacterElement({ image, name }) {
  return createElement('div', {
    className: 'character-card',
    children: [
      createElement('img', { className: 'character-card__image', src: image }),
      createElement('div', {
        className: 'character-card__info',
        children: [
          createElement('div', {
            className: 'character-card__name',
            children: [
              createElement('h2', {
                innerText: name,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

// "official-artwork": {
//   "front_default":

// "dream_world": {
//   "front_default":
