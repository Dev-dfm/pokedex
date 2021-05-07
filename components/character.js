import './character.css';
import { createElement } from '../utils/elements';

export function createCharacterElement({ name, url }) {
  return createElement('div', {
    className: 'character-card',
    children: [
      createElement('img', {
        className: 'character-card__image',
        src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url.match(
          /(\d+)(?!.*\d)/g
        )}.png`,
      }),
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
