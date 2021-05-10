import './style.css';
import styles from './details.module.css';
import { createElement } from './utils/elements';
import { getCharacter } from './utils/api';
import { createCharacterDetails } from './components/characterDetails';

// looks at the url (which is defined in the anchor href-link [to the details character page]) and gets the id number out of the url
const params = new URLSearchParams(location.search);
const pokemonId = params.get('id');

const characterSection = createElement('section', {
  className: styles.characterSection,
});

getCharacter(pokemonId).then((response) => {
  const characterDetails = createCharacterDetails(response);
  characterSection.append(characterDetails);
  // return characterDetails;
  characterSection.addEventListener('mousemove', (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 25;
    let y = (window.innerHeight / 2 - e.pageY) / 25;
    characterDetails.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });
});

console.log(characterSection);

const mainElement = createElement('main', {
  className: styles.main,
  children: [characterSection],
});

document.querySelector('#app').append(mainElement);
