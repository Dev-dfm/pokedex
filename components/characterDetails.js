import styles from './characterDetails.module.css';
import { createElement } from '../utils/elements';

export function createCharacterDetails({
  id,
  name,
  stats,
  // types,
  // weight,
  // height,
}) {
  return createElement('section', {
    className: styles['container'],
    children: [
      createElement('div', {
        className: styles['characterCard'],
        children: [
          createElement('img', {
            className: styles['character-card__image'],
            src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
          }),
          createElement('article', {
            className: styles['character-card__info'],
            children: [
              createElement('h2', {
                className: styles['character-card__name'],
                innerText: name,
              }),
              createElement('p', {
                className: styles['character-card__id'],
                innerText: '#' + `${id}`.toString().padStart(3, '0'),
              }),
              createElement('div', {
                className: styles['character-card__line'],
              }),
              // placeholder form more pokemon-info
            ],
          }),
          createElement('section', {
            className: styles['character-card__secondaryStats'],
            children: [
              createElement('div', {
                className: styles['character-card__attack'],
                children: [
                  createElement('p', {
                    className: styles['character-card__attackText'],
                    innerText: 'Attack',
                  }),
                  createElement('h3', {
                    className: styles['character-card__attackValue'],
                    innerText: stats[1].base_stat,
                  }),
                ],
              }),
              createElement('div', {
                className: styles['character-card__hp'],
                children: [
                  createElement('p', {
                    className: styles['character-card__hpText'],
                    innerText: 'HP',
                  }),
                  createElement('h3', {
                    className: styles['character-card__hpValue'],
                    innerText: stats[0].base_stat,
                  }),
                ],
              }),
              createElement('div', {
                className: styles['character-card__defense'],
                children: [
                  createElement('p', {
                    className: styles['character-card__defenseText'],
                    innerText: 'Defense',
                  }),
                  createElement('h3', {
                    className: styles['character-card__defenseValue'],
                    innerText: stats[2].base_stat,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

//////////    MORE POKEMON INFO

// createElement('section', {
//   className: styles['character-card__primaryStats'],
//   children: [
//     createElement('div', {
//       className: styles['character-card__type'],
//       children: [
//         createElement('p', {
//           className: styles['character-card__typeText'],
//           innerText: 'Type',
//         }),
//         createElement('p', {
//           className: styles['character-card__typeValue'],
//           innerText: `${types[0].type.name} / ${types[1].type.name}`,
//         }),
//       ],
//     }),
//     createElement('div', {
//       className: styles['character-card__weight'],
//       children: [
//         createElement('p', {
//           className: styles['character-card__weightText'],
//           innerText: 'Weight',
//         }),
//         createElement('p', {
//           className: styles['character-card__weightValue'],
//           innerText: weight,
//         }),
//       ],
//     }),
//     createElement('div', {
//       className: styles['character-card__height'],
//       children: [
//         createElement('p', {
//           className: styles['character-card__heightText'],
//           innerText: 'Height',
//         }),
//         createElement('p', {
//           className: styles['character-card__heightValue'],
//           innerText: height,
//         }),
//       ],
//     }),
//   ],
// }),
