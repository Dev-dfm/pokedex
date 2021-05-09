import styles from './characterDetails.module.css';
import { createElement } from '../utils/elements';

export function createCharacterDetails({ name }) {
  return createElement('div', {
    className: styles['character-card'],
    innerText: name,
  });
}
