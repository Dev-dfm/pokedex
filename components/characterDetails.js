import styles from './characterDetails.module.css';
import { createElement } from '../utils/elements';

export function createCharacterDetails({ id }) {
  return createElement('div', {
    className: 'character-card',
    children: [
      createElement('img', {
        className: styles['character-card__image'],
        src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
      }),
      createElement('div', {
        className: styles['character-card__info'],
        src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
      }),
    ],
  });
}
