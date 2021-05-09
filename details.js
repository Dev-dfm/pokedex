import './style.css';
import styles from './details.module.css';
// import styles from './components/characterDetails.module.css';
import { createElement } from './utils/elements';
import { getCharacter } from './utils/api';
import { createCharacterDetails } from './components/characterDetails';

// looks at the url (which is defined in the anchor href-link [to the details character page]) and gets the id number out of the url
const params = new URLSearchParams(location.search);
const pokemonId = params.get('id');

const characterSection = createElement('section', {
  className: 'characterSection',
});

getCharacter(pokemonId).then((response) => {
  const characterDetails = createCharacterDetails(response);
  characterSection.append(characterDetails);
});

const mainElement = createElement('main', {
  className: styles.main,
  children: [characterSection],
});

// const card = document.querySelector(".characterCard");
// const card = document.getElementsByClassName(styles['characterCard'])
// console.log(card);

// characterSection.addEventListener('mousemove', (e) => {
//   let x = (window.innerWidth / 2  - e.pageX) / 25;
//   let y = (window.innerHeight / 2 - e.pageY) / 25;
//   characterSection.style.transform = `rotateY(${y}deg) rotateY(${x}deg)`
// });
// characterCard.style.transform = `rotateY(${y}deg) rotateY(${x}deg)`

document.querySelector('#app').append(mainElement);
