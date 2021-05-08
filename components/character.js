import './character.css';
import { createElement } from '../utils/elements';

export function createCharacterElement({ name, url }) {
  return createElement('div', {
    className: 'character-card',
    children: [
      createElement('img', {
        className: 'character-card__image',
        src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${url.match(
          /(\d+)(?!.*\d)/g
        )}.svg`,
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

// PNG FORMAT
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/

// SVG FORMAT
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world.front_default/

// pokemon.sprites.other.dream-world.front_default

//`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${url.match(
// /(\d+)(?!.*\d)/g
// )}.svg`,
