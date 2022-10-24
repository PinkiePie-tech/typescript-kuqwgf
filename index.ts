// Import stylesheets
import './style.css';

const exo1 = [0, 6, 4, 1, 3, 2, 5];

exo1[5];
exo1[9];
exo1.sort();
exo1.sort().reverse();
exo1.sort().filter((value) => value > 3);
exo1.sort().filter((value) => value % 2 === 0);
exo1.sort().map((value) => value * 2);
exo1.sort().concat([7, 8, 9]);

const exo2 = [
  {
    id: 0,
    name: 'toto',
    prenom: 'tutu',
  },
  {
    id: 4,
    name: 'tata',
    prenom: 'titi',
  },
  {
    id: 2,
    name: 'tyty',
    prenom: 'tete',
  },
  {
    id: 1,
    name: 'Georges',
    prenom: 'Marion',
  },
];

exo2.map((value) => value.name + ' ' + value.prenom);
exo2.map((value, index) => `${index} : ${value.name}`);
exo2.filter((value) => !value.name.includes('t'));

const exo3 = {
  id: 1,
  name: 'stench',
  is_main_series: true,
  generation: {
    name: 'generation-iii',
    url: 'https://pokeapi.co/api/v2/generation/3/',
  },
  names: [
    {
      name: 'Stench',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
    },
  ],
  effect_entries: [
    {
      effect:
        "This Pokémon's damaging moves have a 10% chance to make the target [flinch]{mechanic:flinch} with each hit if they do not already cause flinching as a secondary effect.\n\nThis ability does not stack with a held item.\n\nOverworld: The wild encounter rate is halved while this Pokémon is first in the party.",
      short_effect:
        'Has a 10% chance of making target Pokémon [flinch]{mechanic:flinch} with each hit.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
    },
  ],
  effect_changes: [
    {
      version_group: {
        name: 'black-white',
        url: 'https://pokeapi.co/api/v2/version-group/11/',
      },
      effect_entries: [
        {
          effect: 'Has no effect in battle.',
          language: {
            name: 'en',
            url: 'https://pokeapi.co/api/v2/language/9/',
          },
        },
      ],
    },
  ],
  flavor_text_entries: [
    {
      flavor_text: 'è‡­ãã¦ã€€ç›¸æ‰‹ãŒ\nã²ã‚‹ã‚€ã€€ã“ã¨ãŒã‚ã‚‹ã€‚',
      language: {
        name: 'ja-kanji',
        url: 'https://pokeapi.co/api/v2/language/11/',
      },
      version_group: {
        name: 'x-y',
        url: 'https://pokeapi.co/api/v2/version-group/15/',
      },
    },
  ],
  pokemon: [
    {
      is_hidden: true,
      slot: 3,
      pokemon: {
        name: 'gloom',
        url: 'https://pokeapi.co/api/v2/pokemon/44/',
      },
    },
  ],
};

exo3.pokemon[0].pokemon.name;
exo3.generation.name;
exo3.generation.language?.name;

const keyName = 'pokemon';
console.log(exo3[keyName][0]?.[keyName]?.url);
console.log(exo3['pokemon'][0]?.['pokemon']?.url);
console.log(exo3.pokemon[0]?.pokemon?.url);

for(let key in exo3) {
  console.log(key, exo3[key]);
}

exo3.effect_entries[0].effect.replace('flinch', 'prout');
// Vive les regex :D
exo3.effect_entries[0].effect.replace(/flinch/g, 'prout');

exo3.pokemon.find((pokemon) => pokemon.slot === 3)?.[0]?.pokemon.name;
exo3.pokemon.find((pokemon) => pokemon.slot === 4)?.[0]?.pokemon.name;
